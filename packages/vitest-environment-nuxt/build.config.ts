import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  externals: [
    '#imports',
    '#app/entry',
    '#build/root-component.mjs',
    '@nuxt/schema',
    'vite',
  ],
  failOnWarn: false,
})
