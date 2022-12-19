import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  externals: ['#app/entry', '#build/root-component.mjs', 'vite'],
  failOnWarn: false
})
