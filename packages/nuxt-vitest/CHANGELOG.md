# Changelog


## v0.11.0

[compare changes](https://github.com/danielroe/nuxt-vitest/compare/v0.10.5...v0.11.0)

### 🚀 Enhancements

- **utils:** Add method option to `registerEndpoint` ([#346](https://github.com/danielroe/nuxt-vitest/pull/346))

### 🩹 Fixes

- ⚠️  Ignore query params when checking if an endpoint is mocked ([a9f406e](https://github.com/danielroe/nuxt-vitest/commit/a9f406e))
- Mock app manifest if required ([#354](https://github.com/danielroe/nuxt-vitest/pull/354))

### 📖 Documentation

- Fix `registerEndpoint` example ([#336](https://github.com/danielroe/nuxt-vitest/pull/336))

### 🏡 Chore

- Update to latest nuxi ([#335](https://github.com/danielroe/nuxt-vitest/pull/335))
- Update to nuxt v3.7.3 ([f9d7b73](https://github.com/danielroe/nuxt-vitest/commit/f9d7b73))
- Bump nuxt versions to v3.7.4 ([#353](https://github.com/danielroe/nuxt-vitest/pull/353))
- Explicit type imports ([3465a25](https://github.com/danielroe/nuxt-vitest/commit/3465a25))
- Use more explicit type imports ([21952b4](https://github.com/danielroe/nuxt-vitest/commit/21952b4))
- More explicit types ([80ee333](https://github.com/danielroe/nuxt-vitest/commit/80ee333))

### ✅ Tests

- Update test to use server rather than live api ([b05c3f6](https://github.com/danielroe/nuxt-vitest/commit/b05c3f6))

### 🎨 Styles

- Lint ([a5c4c85](https://github.com/danielroe/nuxt-vitest/commit/a5c4c85))

#### ⚠️ Breaking Changes

- ⚠️  Ignore query params when checking if an endpoint is mocked ([a9f406e](https://github.com/danielroe/nuxt-vitest/commit/a9f406e))

### ❤️ Contributors

- Daniel Roe <daniel@roe.dev>
- Yasser Lahbibi ([@yassilah](http://github.com/yassilah))
- Alexander Lichter ([@manniL](http://github.com/manniL))
- Pooya Parsa <pyapar@gmail.com>

## v0.10.5

[compare changes](https://github.com/danielroe/nuxt-vitest/compare/v0.10.4...v0.10.5)

### 🩹 Fixes

- Handle mocking composables that use default export ([cf521f4](https://github.com/danielroe/nuxt-vitest/commit/cf521f4))
- **vitest-environment-nuxt:** Import `@testing-library/vue` within `renderSuspended` ([#331](https://github.com/danielroe/nuxt-vitest/pull/331))

### ✅ Tests

- Avoid depending on specific number of ticks ([99c8444](https://github.com/danielroe/nuxt-vitest/commit/99c8444))

### ❤️ Contributors

- Julien Huang <julien.huang@outlook.fr>
- Niko-chaffinchicas 
- Daniel Roe <daniel@roe.dev>

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

