import { defineVitestConfig } from 'nuxt-vitest/config'

export default defineVitestConfig({
  test: {
    dir: 'tests',
    coverage: {
      reportsDirectory: 'coverage',
    },
    environmentOptions: {
      nuxtDomEnvironment: process.env.VITEST_DOM_ENV
    }
  },
})
