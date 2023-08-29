import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  externals: [
    '#imports',
    '#app/entry',
    '#build/root-component.mjs',
    'node-fetch-native/polyfill',
    '@nuxt/schema',
    'vite',
  ],
  failOnWarn: false,
})
