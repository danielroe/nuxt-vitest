import { mount, VueWrapper } from '@vue/test-utils'
import { h, DefineComponent, Suspense } from 'vue'

// @ts-expect-error virtual file
import NuxtRoot from '#build/root-component.mjs'

export async function mountSuspended<T extends DefineComponent<any, any, any, any>> (component: T) {
  return new Promise<VueWrapper<InstanceType<T>>>(resolve => {
    const vm = mount({
      setup: NuxtRoot.setup,
      render: () => h(Suspense, { onResolve: () => resolve(vm as any) }, { default: () => h(component) })
    })
  })
}


export async function mountSuspendedWithRoute<T extends DefineComponent<any, any, any, any>> (component: T) {
  return new Promise<VueWrapper<InstanceType<T>>>(async resolve => {
    //   const vueApp = createApp({
    //     setup: NuxtRoot.setup,
    //     render: () => h(Suspense, { onResolve: () => resolve(vueApp as any) }, { default: () => h(component) })
    //   })

    //   const nuxt = createNuxtApp({ vueApp })

    //   try {
    //     await applyPlugins(nuxt, plugins)
    //   } catch (err) {
    //     await nuxt.callHook('app:error', err)
    //     nuxt.payload.error = (nuxt.payload.error || err) as any
    //   }

    //   try {
    //     await nuxt.hooks.callHook('app:created', vueApp)
    //     await nuxt.hooks.callHook('app:beforeMount', vueApp)
    //     const app = document.createElement('div')
    //     document.body.appendChild(app)
    //     app.id = 'something'
    //     vueApp.mount('#something')
    //     await nuxt.hooks.callHook('app:mounted', vueApp)
    //     await nextTick()
    //   } catch (err) {
    //     await nuxt.callHook('app:error', err)
    //     nuxt.payload.error = (nuxt.payload.error || err) as any
    //   }
  })
}
