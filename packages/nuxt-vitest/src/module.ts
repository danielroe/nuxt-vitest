import { defineNuxtModule, logger } from '@nuxt/kit'
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
    process.env.__NUXT_VITEST__ = 'true'

    // await installModule('vitest-environment-nuxt/module')

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
          },
        }
      )

      config.plugins = (config.plugins || []).filter((p: any) => {
        return !vitePluginBlocklist.includes(p?.name)
      })

      process.env.__NUXT_VITEST_RESOLVED__ = 'true'
      const { startVitest } = await import('vitest/node')
      const promise = startVitest(
        'test',
        [],
        {
          reporters: options.logToConsole ? undefined : [{}], // do not report to console
          ui: true,
          open: false,
          api: {
            port: PORT,
          },
        },
        config
      )

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
