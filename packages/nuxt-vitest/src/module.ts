import { defineNuxtModule, installModule, logger, resolvePath } from '@nuxt/kit'
import type { UserConfig as VitestConfig } from 'vitest'
import { mergeConfig, InlineConfig as ViteConfig } from 'vite'
import { getVitestConfig } from './config'
import { getPort } from 'get-port-please'

export interface NuxtVitestOptions {
  startOnBoot?: boolean
  logToConsole?: boolean
  configFile?: string
  vitestConfig?: VitestConfig
}

/**
 * List of plugins that are not compatible with text env.
 * Hard-coded for now, should remove by PR to upstream.
 */
const vitePluginBlocklist = ['vite-plugin-vue-inspector', 'vite-plugin-inspect']

export default defineNuxtModule<NuxtVitestOptions>({
  meta: {
    name: 'nuxt-vitest',
    configKey: 'vitest',
  },
  defaults: {
    startOnBoot: false,
    logToConsole: false,
  },
  async setup(options, nuxt) {
    await installModule('vitest-environment-nuxt/module')

    if (!nuxt.options.dev) return

    // the nuxt instance is used by a standalone Vitest env, we skip this module
    if (process.env.TEST || process.env.VITE_TEST) return

    const rawViteConfigPromise = new Promise<ViteConfig>(resolve => {
      nuxt.hook('vite:extendConfig', config => {
        resolve(config)
      })
    })

    const PORT = await getPort({ port: 15555 })
    const URL = `http://localhost:${PORT}/__vitest__/`

    async function start() {
      const rawViteConfig = mergeConfig({}, await rawViteConfigPromise)

      const viteConfig = mergeConfig(
        await getVitestConfig({ nuxt, viteConfig: rawViteConfig }),
        <ViteConfig>{
          server: {
            middlewareMode: false,
            hmr: false,
          },
          build: {
            ssr: false,
          },
        }
      )

      viteConfig.plugins = (viteConfig.plugins || []).filter((p: any) => {
        return !vitePluginBlocklist.includes(p?.name)
      })

      viteConfig.plugins.push({
        name: 'nuxt:vitest:client-stub',
        enforce: 'post',
        transform(_: string, id: string) {
          // replace vite client with stub
          if (id.endsWith('/vite/dist/client/client.mjs'))
            return `
export const injectQuery = id => id
  
export function createHotContext() {
  return {
    accept: () => {},
    prune: () => {},
    dispose: () => {},
    decline: () => {},
    invalidate: () => {},
    on: () => {},
  }
}

export function updateStyle() {}`
        },
      })

      process.env.__NUXT_VITEST_RESOLVED__ = 'true'
      const { startVitest } = (await import(
        await resolvePath('vitest/node')
      )) as typeof import('vitest/node')

      // For testing dev mode in CI, maybe expose an option to user later
      const vitestConfig = process.env.NUXT_VITEST_DEV_TEST
        ? {
            ...options.vitestConfig,
            watch: false,
            config: options.configFile,
          }
        : {
            ...options.vitestConfig,
            reporters: options.logToConsole ? undefined : [{}], // do not report to console
            ui: true,
            open: false,
            api: {
              port: PORT,
            },
            config: options.configFile,
          }

      // Start Vitest
      const promise = startVitest('test', [], vitestConfig, viteConfig)

      if (process.env.NUXT_VITEST_DEV_TEST) {
        promise.then(v => v?.close()).then(() => process.exit())
        promise.catch(() => process.exit(1))
      }

      logger.info(`Vitest UI starting on ${URL}`)

      return await promise
    }

    let promise: Promise<any> | undefined

    // @ts-ignore
    nuxt.hook('devtools:customTabs', iframeTabs => {
      iframeTabs.push({
        title: 'Vitest',
        name: 'vitest',
        icon: 'logos-vitest',
        view: {
          type: 'iframe',
          src: URL,
        },
        lazy: {
          onLoad: async () => {
            promise = promise || start()
            await promise
          },
          description: 'Start tests along with Nuxt',
        },
      })
    })

    if (options.startOnBoot) {
      promise = promise || start()
    }
  },
})
