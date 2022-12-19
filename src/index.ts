import type { Environment } from 'vitest'
import { Window, GlobalWindow } from 'happy-dom'
import { createFetch } from 'ohmyfetch'
import { App, createApp, toNodeListener } from 'h3'
import {
  createCall,
  createFetch as createLocalFetch,
} from 'unenv/runtime/fetch/index'

// @ts-expect-error TODO: https://github.com/vitest-dev/vitest/pull/2530
import * as viteEnvironments from 'vitest/environments'
const { populateGlobal } = viteEnvironments as typeof import('vitest/dist/environments')

export default <Environment> {
  name: 'nuxt',
  async setup () {
    const win = new (GlobalWindow || Window)() as any as (Window & {
      __app: App
      __registry: Set<string>
      __NUXT__: any
      $fetch: any
      fetch: any
    })

    win.__NUXT__ = {
      serverRendered: false,
      config: {
        public: {},
        app: { baseURL: '/' },
      },
      data: {},
      state: {},
    }

    const app = win.document.createElement('div')
    // this is a workaround for a happy-dom bug with ids beginning with _
    app.id = 'nuxt-test'
    win.document.body.appendChild(app)

    // @ts-expect-error
    win.IntersectionObserver = win.IntersectionObserver || class IntersectionObserver {
      observe () {}
    }

    const h3App = createApp()

    // @ts-expect-error TODO: fix in h3
    const localCall = createCall(toNodeListener(h3App))
    const localFetch = createLocalFetch(localCall, globalThis.fetch)

    const registry = new Set<string>()

    win.fetch = (init, options) => {
      if (typeof init === 'string' && registry.has(init)) {
        init = '/_' + init
      }
      return localFetch(init, options)
    }

    // @ts-expect-error
    win.$fetch = createFetch({ fetch: win.fetch, Headers: win.Headers })

    win.__registry = registry
    win.__app = h3App

    const { keys, originals } = populateGlobal(global, win, { bindFunctions: true })

    // @ts-expect-error nuxt alias
    await import('#app/entry')

    return {
      // called after all tests with this env have been run
      teardown () {
        win.happyDOM.cancelAsync()
        keys.forEach(key => delete global[key])
        originals.forEach((v, k) => global[k] = v)
      }
    }
  }
}
