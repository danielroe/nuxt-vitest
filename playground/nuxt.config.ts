// https://v3.nuxtjs.org/api/configuration/nuxt.config
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
  runtimeConfig: {
    public: {
      hello: 'world',
    },
  },
})
