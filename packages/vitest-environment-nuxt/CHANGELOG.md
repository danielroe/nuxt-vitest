

## v0.10.4

[compare changes](https://github.com/danielroe/nuxt-vitest/compare/v0.10.3...v0.10.4)

### 🩹 Fixes

- Use workspace dependency ([6669c4f](https://github.com/danielroe/nuxt-vitest/commit/6669c4f))

### ❤️ Contributors

- Daniel Roe <daniel@roe.dev>

## v0.10.3

[compare changes](https://github.com/danielroe/nuxt-vitest/compare/0.10.2...v0.10.3)

### 🚀 Enhancements

- **vitest-environment-nuxt:** Allow mocking imports within setup files ([#274](https://github.com/danielroe/nuxt-vitest/pull/274))
- Add `renderSuspended` for use with testing-library ([#302](https://github.com/danielroe/nuxt-vitest/pull/302))

### 🩹 Fixes

- Add node10 types for `vitest-environment-nuxt` ([#307](https://github.com/danielroe/nuxt-vitest/pull/307))
- Add explicit dependencies ([32308a6](https://github.com/danielroe/nuxt-vitest/commit/32308a6))
- **nuxt-vitest:** Default rootId to undefined rather than `false` ([2c95dd0](https://github.com/danielroe/nuxt-vitest/commit/2c95dd0))
- Drop `whatwg-fetch` polyfill and update to nuxt v3.7 ([#320](https://github.com/danielroe/nuxt-vitest/pull/320))
- Do not inline polyfill ([c87b64c](https://github.com/danielroe/nuxt-vitest/commit/c87b64c))

### 📖 Documentation

- Include `vi.hoisted` as an example with `mockNuxtImport` ([#305](https://github.com/danielroe/nuxt-vitest/pull/305))

### 🏡 Chore

- Skip test for now ([a3dcf71](https://github.com/danielroe/nuxt-vitest/commit/a3dcf71))
- Fix tests on Windows ([#306](https://github.com/danielroe/nuxt-vitest/pull/306))
- Upgrade deps and use inferred `.d.mts` and `.d.cts` types ([#319](https://github.com/danielroe/nuxt-vitest/pull/319))
- Switch to changelogen ([ed27b72](https://github.com/danielroe/nuxt-vitest/commit/ed27b72))

### ✅ Tests

- Correct test assertion ([14c7b01](https://github.com/danielroe/nuxt-vitest/commit/14c7b01))

### ❤️ Contributors

- Daniel Roe <daniel@roe.dev>
- Oskar Olsson 
- Joaquín Sánchez ([@userquin](http://github.com/userquin))
- Julien Huang <julien.h.dev@gmail.com>
- Marijn Kok <rinux55@gmail.com>

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