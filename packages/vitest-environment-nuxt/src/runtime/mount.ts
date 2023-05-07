import { mount, VueWrapper, MountingOptions } from '@vue/test-utils'
import { h, DefineComponent, Suspense, nextTick } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

import { RouterLink } from './components/RouterLink'

// @ts-expect-error virtual file
import NuxtRoot from '#build/root-component.mjs'
import { useRouter } from '#imports'

interface MountSuspendedOptions {
  route?: RouteLocationRaw
}

interface Options extends MountSuspendedOptions, MountingOptions<any, any> {}

export async function mountSuspended<
  T extends DefineComponent<any, any, any, any>
>(component: T, options?: Options) {
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
            {
              default: () =>
                h({
                  async setup() {
                    const router = useRouter()
                    await router.replace(options?.route || '/')
                    return () => h(
                      component,
                      { ...options?.props, ...options?.attrs },
                      { ...options?.slots }
                    )
                  },
                }),
            }
          ),
      },
      {
        ...options,
        global: {
          ...options?.global,
          config: {
            ...options?.global?.config,
            globalProperties: vueApp.config.globalProperties,
          },
          provide: vueApp._context.provides,
          components: {
            ...options?.global?.components,
            RouterLink,
          },
        },
      }
    )
  })
}
