import { expect, it } from 'vitest'
import { mountSuspended } from 'vitest-environment-nuxt/utils'
import ExportDefineComponent from '~/components/ExportDefineComponent.vue'

it('should support defineComponent without setup script', async () => {
  const component = await mountSuspended(ExportDefineComponent, {
    props: {
      myProp: 'Hello nuxt-vitest',
    },
  })
  expect(component.html()).toMatchInlineSnapshot(`
    "<div>
      <h1>SetupExportComponent</h1><pre>Hello nuxt-vitest</pre><pre>XHello nuxt-vitest</pre>
    </div>"
  `)
})
