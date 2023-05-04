import { mount, VueWrapper } from '@vue/test-utils'
import { h, DefineComponent, Suspense, nextTick } from 'vue'

import { RouterLink } from './components/RouterLink'

// @ts-expect-error virtual file
import NuxtRoot from '#build/root-component.mjs'

export async function mountSuspended<
  T extends DefineComponent<any, any, any, any>
>(component: T) {
  // @ts-expect-error untyped global __unctx__
  const vueApp = globalThis.__unctx__.get('nuxt-app').tryUse().vueApp
  return new Promise<VueWrapper<InstanceType<T>>>(resolve => {
    const vm = mount(
      {
        setup: NuxtRoot.setup,
        render: () =>
          h(
            Suspense,
            { onResolve: () => nextTick().then(() => resolve(vm as any)) },
            { default: () => h(component) }
          ),
      },
      {
        global: {
          config: {
            globalProperties: vueApp.config.globalProperties,
          },
          provide: vueApp._context.provides,
          components: {
            RouterLink,
          },
        },
      }
    )
  })
}
