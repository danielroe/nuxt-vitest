import { loadNuxt, buildNuxt } from '@nuxt/kit'
import type { InlineConfig as VitestConfig } from 'vitest'
import { InlineConfig, mergeConfig, defineConfig } from 'vite'
import autoImportMock from './modules/auto-import-mock'

// https://github.com/nuxt/framework/issues/6496
async function getViteConfig(rootDir = process.cwd()) {
  const nuxt = await loadNuxt({
    cwd: rootDir,
    dev: false,
    ready: false,
    overrides: {
      ssr: false,
      app: {
        rootId: 'nuxt-test',
      },
    },
  })
  nuxt.options.modules.push(autoImportMock)
  await nuxt.ready()

  return new Promise<InlineConfig>((resolve, reject) => {
    nuxt.hook('vite:extendConfig', config => {
      resolve(config)
      throw new Error('_stop_')
    })
    buildNuxt(nuxt).catch(err => {
      if (!err.toString().includes('_stop_')) {
        reject(err)
      }
    })
  }).finally(() => nuxt.close())
}

export async function getVitestConfig(): Promise<
  InlineConfig & { test: VitestConfig }
> {
  const viteConfig = await getViteConfig()

  return {
    ...viteConfig,
    test: {
      environment: 'nuxt',
      deps: {
        inline: [/\/(nuxt|nuxt3)\//, /^#/, 'vue', 'vitest-environment-nuxt'],
      },
    },
  }
}
export async function defineConfigWithNuxtEnv(config: InlineConfig = {}) {
  return defineConfig(async () => {
    return mergeConfig(await getVitestConfig(), config)
  })
}
