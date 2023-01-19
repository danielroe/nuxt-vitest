import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  externals: [
    '#app/entry',
    '#build/root-component.mjs',
    '@nuxt/schema',
    'vite',
  ],
  failOnWarn: false,
})
