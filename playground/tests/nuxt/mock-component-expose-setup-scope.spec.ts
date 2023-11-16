import { expect, it } from 'vitest'
import { mountSuspended } from 'vitest-environment-nuxt/utils'
import MockComponent from './mocks/MockComponent.vue'

it('should expose setup scope', async () => {
  const component = await mountSuspended(MockComponent)
  expect(component.setupScope.counter.value).toBe(1)
  expect(component.setupScope.doubled.value).toBe(2)
})
