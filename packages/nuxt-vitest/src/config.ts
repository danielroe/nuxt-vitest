import type { Nuxt } from '@nuxt/schema'
import type { InlineConfig as VitestConfig } from 'vitest'
import { InlineConfig, mergeConfig, defineConfig } from 'vite'

interface GetVitestConfigOptions {
  nuxt: Nuxt
  viteConfig: InlineConfig
}

// https://github.com/nuxt/framework/issues/6496
async function getNuxtAndViteConfig(rootDir = process.cwd()) {
  const { loadNuxt, buildNuxt } = await import('@nuxt/kit')
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
  await nuxt.ready()

  if (!nuxt.options._installedModules.find(i => i.meta.name === 'nuxt-vitest')) {
    throw new Error('Failed to load nuxt-vitest module. You may need to add it to your nuxt.config.')
  }

  return new Promise<GetVitestConfigOptions>((resolve, reject) => {
    nuxt.hook('vite:extendConfig', viteConfig => {
      resolve({ nuxt, viteConfig })
      throw new Error('_stop_')
    })
    buildNuxt(nuxt).catch(err => {
      if (!err.toString().includes('_stop_')) {
        reject(err)
      }
    })
  }).finally(() => nuxt.close())
}

export async function getVitestConfig(
  options?: GetVitestConfigOptions
): Promise<InlineConfig & { test: VitestConfig }> {
  if (!options)
    options = await getNuxtAndViteConfig()

  return {
    ...options.viteConfig,
    test: {
      ...options.viteConfig.test,
      dir: options.nuxt.options.rootDir,
      environment: 'nuxt',
      deps: {
        ...options.viteConfig.test?.deps,
        inline:
          options.viteConfig.test?.deps?.inline === true
            ? true
            : [
                // vite-node defaults
                /\/(nuxt|nuxt3)\//,
                /^#/,
                // additional deps
                'vue',
                'vitest-environment-nuxt',
                ...(options.nuxt.options.build.transpile.filter(
                  r => typeof r === 'string' || r instanceof RegExp
                ) as Array<string | RegExp>),
                ...(options.viteConfig.test?.deps?.inline || []),
              ],
      },
    }
  }
}

export function defineConfigWithNuxt(config: InlineConfig = {}) {
  return defineConfig(async () => {
    // When Nuxt module call `startVitest`, we don't want to call `getVitestConfig` again
    if (process.env.__NUXT_VITEST_RESOLVED__)
      return config
    return mergeConfig(await getVitestConfig(), config)
  })
}
