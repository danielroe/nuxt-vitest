

## [0.10.1](https://github.com/danielroe/vitest-environment-nuxt/compare/0.10.0...0.10.1) (2023-07-18)


### Bug Fixes

* bump vitest peer dependency range ([77a43c1](https://github.com/danielroe/vitest-environment-nuxt/commit/77a43c173001de3dcfc8aabe25a50571dcad45c9))

## [0.10.0](https://github.com/danielroe/vitest-environment-nuxt/compare/0.9.0...0.10.0) (2023-07-17)


### Features

* register all auto-imports for mocking ([#254](https://github.com/danielroe/vitest-environment-nuxt/issues/254)) ([8799e6a](https://github.com/danielroe/vitest-environment-nuxt/commit/8799e6a8a4d1edc0fd6ec0019655efa9f9ebb957))


### Bug Fixes

* automatically polyfill `fetch` within tests ([#244](https://github.com/danielroe/vitest-environment-nuxt/issues/244)) ([c3edd06](https://github.com/danielroe/vitest-environment-nuxt/commit/c3edd0687419f244a7674be6c4613e8e46ab9fa3))
* ensure vitest mocking plugin is placed last ([#263](https://github.com/danielroe/vitest-environment-nuxt/issues/263)) ([8a89fe3](https://github.com/danielroe/vitest-environment-nuxt/commit/8a89fe3c7bf8b669be00b7ccb20ff3b8393366ac))

## [0.9.0](https://github.com/danielroe/vitest-environment-nuxt/compare/0.8.7...0.9.0) (2023-07-06)


### ⚠ BREAKING CHANGES

* you now need to explicitly add `happy-dom` or `jsdom` as a dev dependency based on which `domEnvironment` you want to be in. (`happy-dom` is set by default.)

### Features

* option to replace `happy-dom` with `jsdom` ([#121](https://github.com/danielroe/vitest-environment-nuxt/issues/121)) ([f14361f](https://github.com/danielroe/vitest-environment-nuxt/commit/f14361fbdb8bb085d73044c82d1aa8da238ef207))


### Bug Fixes

* remove support for `inline: true` and avoid inlining vite/vue ([d95e15f](https://github.com/danielroe/vitest-environment-nuxt/commit/d95e15fecdb28d01d52db6d4bd956370af356c75))

## [0.8.7](https://github.com/danielroe/vitest-environment-nuxt/compare/0.8.6...0.8.7) (2023-06-30)

## [0.8.6](https://github.com/danielroe/vitest-environment-nuxt/compare/0.8.5...0.8.6) (2023-06-28)


### Bug Fixes

* allow configuring default starting url, and respect `baseURL` ([23802f1](https://github.com/danielroe/vitest-environment-nuxt/commit/23802f170d997676014084b1e51e59df3a661c38))
* ensure module is installed when getting nuxt config ([b2bcbf4](https://github.com/danielroe/vitest-environment-nuxt/commit/b2bcbf41723ffa7f5536aba2a947d4d3b4ab289d))
* properly set default route ([#232](https://github.com/danielroe/vitest-environment-nuxt/issues/232)) ([674ede3](https://github.com/danielroe/vitest-environment-nuxt/commit/674ede32d866a34cf5c300097cc25a6012b5adaf))
* set `rootId` when module is enabled (and set `test`) ([7c7c441](https://github.com/danielroe/vitest-environment-nuxt/commit/7c7c441c868d51363442381962a4d98a449933a4))

## [0.8.5](https://github.com/danielroe/vitest-environment-nuxt/compare/0.8.4...0.8.5) (2023-06-06)


### Bug Fixes

* don't transpile/override NODE_ENV ([c26e981](https://github.com/danielroe/vitest-environment-nuxt/commit/c26e981bbce5383ce34428289e67459f32eae815))

## [0.8.4](https://github.com/danielroe/vitest-environment-nuxt/compare/0.8.3...0.8.4) (2023-06-01)


### Bug Fixes

* import `vitest/node` via file url ([2c1c928](https://github.com/danielroe/vitest-environment-nuxt/commit/2c1c92858f4574127d3d48c6bedb39d9d948fc90)), closes [#196](https://github.com/danielroe/vitest-environment-nuxt/issues/196)

## [0.8.3](https://github.com/danielroe/vitest-environment-nuxt/compare/0.8.2...0.8.3) (2023-06-01)


### Bug Fixes

* **vitest-environment-nuxt:** register imports after context is created ([434b39b](https://github.com/danielroe/vitest-environment-nuxt/commit/434b39b0ad8b707579078b005e3ada2e791ffafe))

## [0.8.2](https://github.com/danielroe/vitest-environment-nuxt/compare/0.8.1...0.8.2) (2023-05-30)


### Bug Fixes

* **nuxt-vitest:** respect cwd as vite test dir ([43f2324](https://github.com/danielroe/vitest-environment-nuxt/commit/43f2324e6dd29688622aed3f3332552797477669))

## [0.8.1](https://github.com/danielroe/vitest-environment-nuxt/compare/0.8.0...0.8.1) (2023-05-30)


### Bug Fixes

* defer to `vue/test-utils` for the type of `mountSuspended` ([24d3f0a](https://github.com/danielroe/vitest-environment-nuxt/commit/24d3f0a165273bc40d2255f9bbf681fac6c0e9af)), closes [#191](https://github.com/danielroe/vitest-environment-nuxt/issues/191)
* **utils:** proxy context to capture emitted events in wrapper ([8bf8037](https://github.com/danielroe/vitest-environment-nuxt/commit/8bf8037e461515a8c5ef6305351823fff9ed484b)), closes [#175](https://github.com/danielroe/vitest-environment-nuxt/issues/175)

## [0.8.0](https://github.com/danielroe/vitest-environment-nuxt/compare/0.7.2...0.8.0) (2023-05-29)


### Features

* **nuxt-vitest:** allow configuring nuxt rootDir and overrides ([#187](https://github.com/danielroe/vitest-environment-nuxt/issues/187)) ([914cee4](https://github.com/danielroe/vitest-environment-nuxt/commit/914cee4bd801d7443094b4f593024410b886ac44))


### Bug Fixes

* move nuxt overrides to `environmentOptions` ([2cc5038](https://github.com/danielroe/vitest-environment-nuxt/commit/2cc5038d58e02bb0a3ca4617da4a9f46060e7003))

## [0.7.2](https://github.com/danielroe/vitest-environment-nuxt/compare/0.7.1...0.7.2) (2023-05-28)


### Bug Fixes

* allow mocking more nuxt auto-imports ([8806143](https://github.com/danielroe/vitest-environment-nuxt/commit/88061434dae082fd31e2228419ad830404b0323a)), closes [#153](https://github.com/danielroe/vitest-environment-nuxt/issues/153)
* narrow down vitest inline patterns ([eb66dd9](https://github.com/danielroe/vitest-environment-nuxt/commit/eb66dd9495a89e23fd5948b4ac1c583ddb65765c))

## [0.7.1](https://github.com/danielroe/vitest-environment-nuxt/compare/0.7.0...0.7.1) (2023-05-21)


### Bug Fixes

* move `vitest` to peer dependency ([616b721](https://github.com/danielroe/vitest-environment-nuxt/commit/616b72133d99ddb06fd7cd0699554d9834edfa3f))

## [0.7.0](https://github.com/danielroe/vitest-environment-nuxt/compare/0.6.12...0.7.0) (2023-05-15)


### Features

* allow passing mount options in `mountSuspended` ([#159](https://github.com/danielroe/vitest-environment-nuxt/issues/159)) ([b0c478a](https://github.com/danielroe/vitest-environment-nuxt/commit/b0c478a98c8a423dacf45a264c1dc5decc1e01f8))
* support injects, global properties (and routing!) ([#154](https://github.com/danielroe/vitest-environment-nuxt/issues/154)) ([82cdd0b](https://github.com/danielroe/vitest-environment-nuxt/commit/82cdd0b361b5e50d26d79946d5530ceede81c98f))


### Bug Fixes

* support `unobserve` method in mocked IntersectionObserver ([#150](https://github.com/danielroe/vitest-environment-nuxt/issues/150)) ([c094878](https://github.com/danielroe/vitest-environment-nuxt/commit/c0948789be59934af60b2b6f302de29a90c0655f))

## [0.6.12](https://github.com/danielroe/vitest-environment-nuxt/compare/0.6.11...0.6.12) (2023-05-03)


### Bug Fixes

* support awaiting nuxt app promises ([#147](https://github.com/danielroe/vitest-environment-nuxt/issues/147)) ([156850e](https://github.com/danielroe/vitest-environment-nuxt/commit/156850e39a6a2fb38a2200b89060cc1858fbd983))

## [0.6.11](https://github.com/danielroe/vitest-environment-nuxt/compare/0.6.10...0.6.11) (2023-05-02)


### Bug Fixes

* **nuxt-vitest:** unshift vue plugins in newer nuxts ([#148](https://github.com/danielroe/vitest-environment-nuxt/issues/148)) ([1ce3e0e](https://github.com/danielroe/vitest-environment-nuxt/commit/1ce3e0e49301e5f9fece54eb85f4bfcf51905477))

## [0.6.10](https://github.com/danielroe/vitest-environment-nuxt/compare/0.6.9...0.6.10) (2023-04-18)


### Bug Fixes

* **nuxt-vitest:** inject vue plugins if missing ([#130](https://github.com/danielroe/vitest-environment-nuxt/issues/130)) ([eb152f4](https://github.com/danielroe/vitest-environment-nuxt/commit/eb152f492e72f4ecfe5e9f5d1170b36edefbb0eb))

## [0.6.9](https://github.com/danielroe/vitest-environment-nuxt/compare/0.6.8...0.6.9) (2023-03-21)


### Bug Fixes

* pass resolved `runtimeConfig` into nuxt environment ([#101](https://github.com/danielroe/vitest-environment-nuxt/issues/101)) ([6dce4dc](https://github.com/danielroe/vitest-environment-nuxt/commit/6dce4dca542c3807c158d3f1c5ac6c950263b4ff))

## [0.6.8](https://github.com/danielroe/vitest-environment-nuxt/compare/0.6.7...0.6.8) (2023-03-09)


### Bug Fixes

* revert type change to `defineVitestConfig` ([#86](https://github.com/danielroe/vitest-environment-nuxt/issues/86)) ([43c0f36](https://github.com/danielroe/vitest-environment-nuxt/commit/43c0f36bad052af17a7abc2317cfad676180990f))

## [0.6.7](https://github.com/danielroe/vitest-environment-nuxt/compare/0.6.6...0.6.7) (2023-03-08)


### Bug Fixes

* correct type of `defineVitestConfig` ([#72](https://github.com/danielroe/vitest-environment-nuxt/issues/72)) ([f3ac427](https://github.com/danielroe/vitest-environment-nuxt/commit/f3ac4274654be7053da3a675c6affeaded37eec0))
* mock core nuxt composables ([#83](https://github.com/danielroe/vitest-environment-nuxt/issues/83)) ([dfbfbf3](https://github.com/danielroe/vitest-environment-nuxt/commit/dfbfbf3a1a53d32925753fcacf93b068a193c62d))

## [0.6.6](https://github.com/danielroe/vitest-environment-nuxt/compare/0.6.5...0.6.6) (2023-02-12)


### Bug Fixes

* **nuxt-vitest:** exclude import protection plugin ([6b9ac3e](https://github.com/danielroe/vitest-environment-nuxt/commit/6b9ac3e580459fb87b059ff6e671b4a87b455ba5))

## [0.6.5](https://github.com/danielroe/vitest-environment-nuxt/compare/0.6.4...0.6.5) (2023-02-01)


### Bug Fixes

* accept object syntax for `to` prop in router mock ([#55](https://github.com/danielroe/vitest-environment-nuxt/issues/55)) ([129b8f4](https://github.com/danielroe/vitest-environment-nuxt/commit/129b8f4b5c911c7923de54860e8984c98627b60d))

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