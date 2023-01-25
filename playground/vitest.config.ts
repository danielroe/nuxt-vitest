import { extendVitestConfigForNuxt } from 'nuxt-vitest/config'

export default extendVitestConfigForNuxt({
  test: {
    dir: 'tests',
    coverage: {
      reportsDirectory: 'coverage',
    },
  },
})
