import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  modules: ['nuxt-vitest', '@nuxt/devtools', '~/modules/custom'],
  vitest: {
    startOnBoot: true,
    logToConsole: true,
    vitestConfig: {
      setupFiles: ['./tests/setup/mocks'],
    },
  },
  imports: {
    injectAtEnd: true,
  },
  vite: {
    // TODO: fix bug with stubbing root package
    resolve: {
      alias: {
        'nuxt-vitest/config': fileURLToPath(new URL('../packages/vitest-environment-nuxt/src/config', import.meta.url)),
        'nuxt-vitest/utils': fileURLToPath(new URL('../packages/vitest-environment-nuxt/src/utils', import.meta.url)),
        'vitest-environment-nuxt/utils':
          fileURLToPath(new URL('../packages/vitest-environment-nuxt/src/utils', import.meta.url)),
        'vitest-environment-nuxt':
          fileURLToPath(new URL('../packages/vitest-environment-nuxt/src/index', import.meta.url)),
      },
    },
  },
  runtimeConfig: {
    public: {
      hello: 'world',
    },
  },
})
