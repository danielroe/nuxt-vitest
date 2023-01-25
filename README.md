# nuxt-vitest

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions][github-actions-src]][github-actions-href]
[![Codecov][codecov-src]][codecov-href]

> A vitest environment for testing code that needs a [Nuxt](https://nuxt.com) runtime environment

- [✨ &nbsp;Changelog](https://github.com/danielroe/nuxt-vitest/blob/main/CHANGELOG.md)

> **Warning**
> This library is in active development and you should pin the patch version before using.

## Installation

1. First install `nuxt-vitest`:

```bash
pnpm add -D nuxt-vitest

# or
yarn add --dev nuxt-vitest
npm i -D nuxt-vitest
```

2. Add `nuxt-vitest` to your `nuxt.config.js`:

```js
export default defineNuxtConfig({
  // ...
  modules: [
    'nuxt-vitest'
  ]
})
```

3. Then create a `vitest.config.mjs` with the following content:

```js
import { defineConfigWithNuxt } from 'nuxt-vitest'

export default defineConfigWithNuxt({
  // any custom vitest config you require
})
```


That's it. Now when you run `vitest` your Nuxt environment will be available throughout your tests.

## 👉 Important notes

When you run your tests within `nuxt-vitest`, they will be running in a [`happy-dom`](https://github.com/capricorn86/happy-dom) environment. Before your tests run, a global Nuxt app will be initialised (including, for example, running any plugins or code you've defined in your `app.vue`).

This means you should be take particular care not to mutate the global state in your tests (or, if you have, to reset it afterwards).

## 🛠️ Helpers

`nuxt-vitest` provides a number of helpers to make testing Nuxt apps easier.

### `mountSuspended`

// TODO:

### `mockNuxtImport`

`mockNuxtImport` allows you to mock Nuxt's auto import functionality. For example, to mock `useStorage`, you can do so like this:

```ts
import { mockNuxtImport } from 'nuxt-vitest/utils'

mockNuxtImport('useStorage', () => {
  return () => {
    return { value: 'mocked storage' }
  }
})

// your tests here
```

## 💻 Development

- Clone this repository
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable` (use `npm i -g corepack` for Node.js < 16.10)
- Install dependencies using `pnpm install`
- Stub the library using `pnpm dev:prepare`
- Run interactive tests using `pnpm test`

## License

Made with ❤️

Published under the [MIT License](./LICENCE).

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt-vitest?style=flat-square
[npm-version-href]: https://npmjs.com/package/nuxt-vitest
[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-vitest?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/nuxt-vitest
[github-actions-src]: https://img.shields.io/github/actions/workflow/status/danielroe/nuxt-vitest/ci.yml?branch=main&style=flat-square
[github-actions-href]: https://github.com/danielroe/nuxt-vitest/actions?query=workflow%3Aci
[codecov-src]: https://img.shields.io/codecov/c/gh/danielroe/nuxt-vitest/main?style=flat-square
[codecov-href]: https://codecov.io/gh/danielroe/nuxt-vitest
