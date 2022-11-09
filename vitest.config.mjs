import { fileURLToPath } from 'node:url'
import { loadNuxt, buildNuxt } from '@nuxt/kit'
import { defineConfig } from 'vite'

// https://github.com/nuxt/framework/issues/6496
async function getViteConfig() {
  const nuxt = await loadNuxt({
    cwd: process.cwd(),
    dev: false,
    overrides: { ssr: false },
  })
  return new Promise((resolve, reject) => {
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

const viteConfig = await getViteConfig()

export default defineConfig({
  ...viteConfig,
  test: {
    environment: 'happy-dom',
    setupFiles: ['./window.mjs'],
    deps: {
      inline: [/\/(nuxt|nuxt3)\//, /^#/, 'vue'],
    },
  },
})
