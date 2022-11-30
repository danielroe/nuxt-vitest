import { createFetch } from 'ohmyfetch'
import { App, createApp, defineEventHandler, toNodeListener } from 'h3'
import {
  createCall,
  createFetch as createLocalFetch,
} from 'unenv/runtime/fetch/index'

// @ts-expect-error undeclared property on window
window.__NUXT__ = {
  serverRendered: false,
  config: {
    public: {},
    app: { baseURL: '/' },
  },
  data: {},
  state: {},
}

const app = document.createElement('div')
document.body.appendChild(app)

// Workaround for happy-dom bug
const { querySelector } = document
app.id = 'nuxt'
function qsWrapper (selectors) {
  if (selectors === '#__nuxt') selectors = '#nuxt'
  return querySelector(selectors)
}
document.querySelector = qsWrapper

const h3App = createApp()

const localCall = createCall(toNodeListener(h3App))
const localFetch = createLocalFetch(localCall, globalThis.fetch)

const registry = new Set<string>()

window.fetch = (init, options) => {
  if (typeof init === 'string' && registry.has(init)) {
    init = '/_' + init
  }
  return localFetch(init, options)
}
window.$fetch = createFetch({ fetch: window.fetch })

window.__registry = registry
window.__app = h3App

declare global {
  interface Window {
    __app: App
    __registry: Set<string>
  }
}

export {}

// @ts-expect-error nuxt alias
await import('#app/entry')
