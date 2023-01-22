import { defineNuxtModule, installModule, logger } from '@nuxt/kit'
import type { UserConfig } from 'vitest/config'
import { mergeConfig, InlineConfig } from 'vite'
import { getVitestConfig } from './config'
import { getPort } from 'get-port-please'

export interface NuxtVitestOptions {
  startOnBoot?: boolean
  logToConsole?: boolean
}

/**
 * List of plugins that are not compatible with text env.
 * Hard-coded for now, should remove by PR to upstream.
 */
const vitePluginBlocklist = ['vite-plugin-vue-inspector']

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

    const PORT = await getPort({ port: 15555 })
    const URL = `http://localhost:${PORT}/__vitest__/`

    const rawViteConfig = new Promise<InlineConfig>(resolve => {
      nuxt.hook('vite:extendConfig', resolve)
    })

    async function start() {
      const config = mergeConfig(
        await getVitestConfig({ nuxt, viteConfig: await rawViteConfig }),
        <UserConfig>{
          server: {
            middlewareMode: false,
            hmr: false,
          },
          build: {
            ssr: false,
          },
        }
      )

      config.plugins = (config.plugins || []).filter((p: any) => {
        return !vitePluginBlocklist.includes(p?.name)
      })

      config.plugins.push({
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
      const { startVitest } = await import('vitest/node')
      const promise = startVitest(
        'test',
        [],
        // For testing dev mode, maybe expose an option to user later 
        process.env.NUXT_VITEST_DEV_TEST
          ? {
              watch: false,
            }
          : {
              reporters: options.logToConsole ? undefined : [{}], // do not report to console
              ui: true,
              open: false,
              api: {
                port: PORT,
              },
            },
        config
      )

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
