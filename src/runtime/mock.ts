import { defineEventHandler, EventHandler } from 'h3'

export function registerEndpoint (url: string, handler: EventHandler) {
  if (!window.__app) return
  window.__app.use('/_' + url, defineEventHandler(handler))
  window.__registry.add(url)
}
