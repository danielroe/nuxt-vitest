import { loadNuxt, buildNuxt } from '@nuxt/kit'
import type { InlineConfig as VitestConfig } from 'vitest'
import type { InlineConfig } from 'vite'

// https://github.com/nuxt/framework/issues/6496
async function getViteConfig (rootDir = process.cwd()) {
  const nuxt = await loadNuxt({
    cwd: rootDir,
    dev: false,
    overrides: {
      ssr: false,
      app: {
        rootId: 'nuxt-test'
      },
    },
  })
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

export async function getVitestConfig (): Promise<InlineConfig & { test: VitestConfig }> {
  const viteConfig = await getViteConfig()

  return {
    ...viteConfig,
    test: {
      environment: 'nuxt',
      deps: {
        inline: [/\/(nuxt|nuxt3)\//, /^#/, 'vue'],
      },
    },
  }
}
