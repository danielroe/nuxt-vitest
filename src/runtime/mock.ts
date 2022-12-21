import { defineEventHandler } from 'h3'
import type { EventHandler } from 'h3'

export function registerEndpoint(url: string, handler: EventHandler) {
  // @ts-expect-error private property
  if (!window.__app) return
  // @ts-expect-error private property
  window.__app.use('/_' + url, defineEventHandler(handler))
  // @ts-expect-error private property
  window.__registry.add(url)
}
