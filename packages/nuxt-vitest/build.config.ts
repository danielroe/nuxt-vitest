import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  rollup: { emitCJS: true },
  entries: ['src/index', 'src/config', 'src/utils'],
  externals: ['vitest/config', '@nuxt/schema', 'vite'],
  failOnWarn: false,
})
