import { describe, it, expect } from 'vitest'

import { mountSuspended, registerEndpoint } from 'vitest-environment-nuxt/utils'

import App from '~/app.vue'
import FetchComponent from '~/components/FetchComponent.vue'
import OptionsComponent from '~/components/OptionsComponent.vue'
import WrapperTests from '~/components/WrapperTests.vue'

describe('client-side nuxt features', () => {
  it('can use core nuxt composables within test file', () => {
    expect(useAppConfig().hey).toMatchInlineSnapshot('false')
  })

  it('can access auto-imported composables from within project', () => {
    const state = useSingleState()
    expect(state.value).toMatchInlineSnapshot('{}')
    state.value.field = 'new value'
    expect(state.value.field).toMatchInlineSnapshot('"new value"')
    expect(useSingleState().value.field).toMatchInlineSnapshot('"new value"')
  })

  it('can access injections from nuxt plugins', () => {
    const app = useNuxtApp()
    expect(app.$auth.didInject).toMatchInlineSnapshot('true')
    expect(app.$router).toBeDefined()
  })

  it('defaults to index page', async () => {
    expect(useRoute().matched[0].meta).toMatchInlineSnapshot(`
      {
        "value": "set in index",
      }
    `)
  })

  it('allows pushing to other pages', async () => {
    await navigateTo('/something')
    expect(useNuxtApp().$router.currentRoute.value.path).toMatchInlineSnapshot(
      '"/something"'
    )
    // It takes two more ticks for the Nuxt useRoute to be updated (as, after suspense resolves,
    // we wait for a final hook and then update the injected route object )
    await nextTick()
    await nextTick()
    expect(useRoute().path).toMatchInlineSnapshot('"/something"')
  })
})

describe('test utils', () => {
  it('can mount components within nuxt suspense', async () => {
    const component = await mountSuspended(App)
    expect(component.html()).toMatchInlineSnapshot(`
      "<div>This is an auto-imported component</div>
      <div> I am a global component </div>
      <div>Index page</div>
      <a href=\\"/test\\"> Test link </a>"
    `)
  })

  it('should render default props within nuxt suspense', async () => {
    const component = await mountSuspended(OptionsComponent)
    expect(component.find('h2').html()).toMatchInlineSnapshot(
      '"<h2>The original</h2>"'
    )
  })

  it('should render passed props within nuxt suspense', async () => {
    const component = await mountSuspended(OptionsComponent, {
      props: {
        title: 'title from mount suspense props',
      },
    })
    expect(component.find('h2').html()).toMatchInlineSnapshot(
      '"<h2>title from mount suspense props</h2>"'
    )
  })

  it('can pass slots to mounted components within nuxt suspense', async () => {
    const component = await mountSuspended(OptionsComponent, {
      slots: {
        default: () => 'slot from mount suspense',
      },
    })
    expect(component.find('div').html()).toMatchInlineSnapshot(
      '"<div>slot from mount suspense</div>"'
    )
  })

  it('can receive emitted events from components mounted within nuxt suspense', async () => {
    const component = await mountSuspended(WrapperTests)
    component.find('button').trigger('click')
    expect(component.emitted()).toMatchInlineSnapshot(`
      {
        "customEvent": [
          [
            "foo",
          ],
        ],
        "otherEvent": [
          [],
        ],
      }
    `)
  })

  it('can use $fetch', () => {
    expect(
      $fetch('https://jsonplaceholder.typicode.com/todos/1')
    ).resolves.toMatchObject({ id: 1 })
  })

  it('can mock fetch requests', async () => {
    registerEndpoint('https://jsonplaceholder.typicode.com/todos/1', () => ({
      title: 'title from mocked api',
    }))
    const component = await mountSuspended(FetchComponent)
    expect(component.html()).toMatchInlineSnapshot(
      '"<div>title from mocked api</div>"'
    )
  })

  // TODO: reenable when merging Nuxt 3.7
  it.skip('handles nuxt routing', async () => {
    const component = await mountSuspended(App, { route: '/test' })
    expect(component.html()).toMatchInlineSnapshot(`
      "<div>This is an auto-imported component</div>
      <div> I am a global component </div>
      <div>/test</div>
      <a href=\\"/test\\"> Test link </a>"
    `)
  })
})
