

## [0.6.4](https://github.com/danielroe/vitest-environment-nuxt/compare/0.6.3...0.6.4) (2023-01-29)


### Bug Fixes

* avoid duplication vi injection ([7d8f493](https://github.com/danielroe/vitest-environment-nuxt/commit/7d8f4935d32995592262b405642168dce428b8b1))
* **ui:** wait for Vitest UI to initiate ([3090ccf](https://github.com/danielroe/vitest-environment-nuxt/commit/3090ccf5152351e704486b3c2b79e20e361bf5dc))

## [0.6.3](https://github.com/danielroe/vitest-environment-nuxt/compare/0.6.2...0.6.3) (2023-01-28)


### Features

* basic devtools indicator ([34884e4](https://github.com/danielroe/vitest-environment-nuxt/commit/34884e4e9960bc296a89fd3100609eeb33dc345f))


### Bug Fixes

* **dev:** do not terminate the process even if no tests ([86fe91e](https://github.com/danielroe/vitest-environment-nuxt/commit/86fe91ea0967a0012ed264b95ed5760a5a7897d6))
* **nuxt-vitest:** add cjs exports to `package.json` ([a9b3088](https://github.com/danielroe/vitest-environment-nuxt/commit/a9b30885037d8e191061124cb165556494bd49e9)), closes [#48](https://github.com/danielroe/vitest-environment-nuxt/issues/48)

## [0.6.2](https://github.com/danielroe/vitest-environment-nuxt/compare/0.6.1...0.6.2) (2023-01-26)


### Features

* add `mockComponent` utility ([#47](https://github.com/danielroe/vitest-environment-nuxt/issues/47)) ([af33fa0](https://github.com/danielroe/vitest-environment-nuxt/commit/af33fa040bc26ecde6221a77a7a4eabc7d686b36))
* adopt new tab interface ([074dde9](https://github.com/danielroe/vitest-environment-nuxt/commit/074dde91934386fa441043e838d2cec5a3e01923))

## [0.6.1](https://github.com/danielroe/vitest-environment-nuxt/compare/0.6.0...0.6.1) (2023-01-25)


### Bug Fixes

* build on prepublish ([df57aaf](https://github.com/danielroe/vitest-environment-nuxt/commit/df57aaf52d9a39f1884ef960285f547e2b77a571))

## [0.6.0](https://github.com/danielroe/vitest-environment-nuxt/compare/0.5.0...0.6.0) (2023-01-25)


### ⚠ BREAKING CHANGES

* rename `defineConfigWithNuxt` to `defineVitestConfig` (#45)
* remove nuxt as default test environment (#30)

### Features

* rename `defineConfigWithNuxt` to `defineVitestConfig` ([#45](https://github.com/danielroe/vitest-environment-nuxt/issues/45)) ([eb8dc41](https://github.com/danielroe/vitest-environment-nuxt/commit/eb8dc4190d325d98774f24141430b90757fb7341))


### Bug Fixes

* modules' meta can be optional ([12b41ca](https://github.com/danielroe/vitest-environment-nuxt/commit/12b41ca1c24c49fbe5bec63e6cbfe6202c3573f2))
* remove nuxt as default test environment ([#30](https://github.com/danielroe/vitest-environment-nuxt/issues/30)) ([3b8e16e](https://github.com/danielroe/vitest-environment-nuxt/commit/3b8e16e36c50c39b552a594e78126bfe3218862e))

## [0.5.0](https://github.com/danielroe/vitest-environment-nuxt/compare/0.4.3...0.5.0) (2023-01-25)


### ⚠ BREAKING CHANGES

* add `nuxt-vitest` module (#34)

### Features

* add `nuxt-vitest` module ([#34](https://github.com/danielroe/vitest-environment-nuxt/issues/34)) ([328098d](https://github.com/danielroe/vitest-environment-nuxt/commit/328098d2e9ea66f7351766b40191e57520d3084e))

## [0.4.3](https://github.com/danielroe/vitest-environment-nuxt/compare/0.4.2...0.4.3) (2023-01-21)


### Bug Fixes

* import explicitly h ([#37](https://github.com/danielroe/vitest-environment-nuxt/issues/37)) ([880de94](https://github.com/danielroe/vitest-environment-nuxt/commit/880de94b03b239f15bac7f73b049b3f1e083d056))

## [0.4.2](https://github.com/danielroe/vitest-environment-nuxt/compare/0.4.1...0.4.2) (2023-01-18)


### Features

* support passing custom test options to `getVitestConfig` ([53a1b68](https://github.com/danielroe/vitest-environment-nuxt/commit/53a1b683fcef58447eaada6faa89420230d40ec5))


### Bug Fixes

* support nuxt projects with custom `srcDir` ([f8d8d86](https://github.com/danielroe/vitest-environment-nuxt/commit/f8d8d86c5059a170a5d8db68207e2c9004b2a8aa))

## [0.4.1](https://github.com/danielroe/vitest-environment-nuxt/compare/0.4.0...0.4.1) (2023-01-17)


### Bug Fixes

* wait a tick for `mountSuspended` ([#28](https://github.com/danielroe/vitest-environment-nuxt/issues/28)) ([704b808](https://github.com/danielroe/vitest-environment-nuxt/commit/704b808e0054c2b581d095290a05ff102c19a979))

## [0.4.0](https://github.com/danielroe/vitest-environment-nuxt/compare/0.3.1...0.4.0) (2023-01-13)


### Features

* expose modules ([#23](https://github.com/danielroe/vitest-environment-nuxt/issues/23)) ([19d103d](https://github.com/danielroe/vitest-environment-nuxt/commit/19d103dfef084ba473609586071906e327710e55))
* **getVitestConfig:** pass custom nuxt instance and config to `getVitestConfig` ([#22](https://github.com/danielroe/vitest-environment-nuxt/issues/22)) ([3e5b470](https://github.com/danielroe/vitest-environment-nuxt/commit/3e5b4708a3cd985cefc2b1f318cea7dfdf97c7c2))


### Bug Fixes

* explicitly import apis for RouterLink mock ([#24](https://github.com/danielroe/vitest-environment-nuxt/issues/24)) ([b1763e7](https://github.com/danielroe/vitest-environment-nuxt/commit/b1763e71ee5fc8ed32bd7b6a1ec77368b161bc1a))

## [0.3.1](https://github.com/danielroe/vitest-environment-nuxt/compare/0.3.0...0.3.1) (2023-01-05)


### Bug Fixes

* inline any deps that need to be transpiled by nuxt ([#13](https://github.com/danielroe/vitest-environment-nuxt/issues/13)) ([011cf34](https://github.com/danielroe/vitest-environment-nuxt/commit/011cf34daa36aebfe7b363a6175333768c115847))

## [0.3.0](https://github.com/danielroe/vitest-environment-nuxt/compare/0.2.0...0.3.0) (2022-12-21)


### Features

* `mockNuxtImport` utility ([#7](https://github.com/danielroe/vitest-environment-nuxt/issues/7)) ([0b82d14](https://github.com/danielroe/vitest-environment-nuxt/commit/0b82d14d3bdca0e78b7655488e5e3412dc3fedd7))

## [0.2.0](https://github.com/danielroe/vitest-environment-nuxt/compare/0.1.1...0.2.0) (2022-12-20)


### Features

* `defineConfigWithNuxtEnv` helper ([#3](https://github.com/danielroe/vitest-environment-nuxt/issues/3)) ([23d19e9](https://github.com/danielroe/vitest-environment-nuxt/commit/23d19e9f02f2923c028d937feca9aef722847c7c))


### Bug Fixes

* add `vitest-environment-nuxt` to inline list ([1d48512](https://github.com/danielroe/vitest-environment-nuxt/commit/1d48512a25c5b9bf4226ed18dc1c9c9b176664cf))

## [0.1.1](https://github.com/danielroe/vitest-environment-nuxt/compare/0.1.0...0.1.1) (2022-12-19)

## 0.1.0 (2022-12-19)


### Features

* mock `<RouterLink>` ([b1e61fa](https://github.com/danielroe/vitest-environment-nuxt/commit/b1e61fafbfded8e03c3b4e3cabe41860da1844cb))