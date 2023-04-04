import { App } from "h3"

export type NuxtBuiltinEnvironment = 'happy-dom' | 'jsdom'
export type EnvironmentNuxt = (global: any, options: Record<string, any>) => Promise<{ 
  window: Window & {
    __app: App
    __registry: Set<string>
    __NUXT__: any
    $fetch: any
    fetch: any
    IntersectionObserver: any
    Headers: any
  }, 
  teardown(): void
}>
