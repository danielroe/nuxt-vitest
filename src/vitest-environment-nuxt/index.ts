import type { Environment } from 'vitest'
import { builtinEnvironments, populateGlobal } from 'vitest/environments'
import { Window, GlobalWindow } from 'happy-dom'
import { createFetch } from 'ohmyfetch'
import { App, createApp, defineEventHandler, toNodeListener } from 'h3'
import {
  createCall,
  createFetch as createLocalFetch,
} from 'unenv/runtime/fetch/index'

export default <Environment> {
  name: 'nuxt',
  async setup () {
    const win = new (GlobalWindow || Window)() as any as (Window & {
      __app: App
      __registry: Set<string>
      $fetch: any
      fetch: any
    })

    // @ts-expect-error undeclared property on window
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
    win.document.body.appendChild(app)

    // Workaround for happy-dom bug
    const { querySelector } = win.document
    app.id = 'nuxt'
    function qsWrapper (selectors) {
      if (selectors === '#__nuxt') selectors = '#nuxt'
      return querySelector(selectors)
    }
    win.document.querySelector = qsWrapper

    const h3App = createApp()

    const localCall = createCall(toNodeListener(h3App))
    const localFetch = createLocalFetch(localCall, globalThis.fetch)

    const registry = new Set<string>()

    win.fetch = (init, options) => {
      if (typeof init === 'string' && registry.has(init)) {
        init = '/_' + init
      }
      return localFetch(init, options)
    }
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
