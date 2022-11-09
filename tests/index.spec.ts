import { describe, it, expect } from 'vitest'
import App from '../app.vue'
import { mountSuspended } from './utils/mount'

describe('full nuxt client-side unit testing', () => {
  it('just works', () => {
    expect(useAppConfig()).toMatchInlineSnapshot(`
      {
        "hey": false,
      }
    `)
  })
  it('mounts components within nuxt suspense!', async () => {
    const component = await mountSuspended(App)
    expect(component.html()).toMatchInlineSnapshot(`
      "<div>{
        \\"userId\\": 1,
        \\"id\\": 1,
        \\"title\\": \\"delectus aut autem\\",
        \\"completed\\": false
        }</div>"
    `)
  })
})
