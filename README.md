# nuxt-vitest

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions][github-actions-src]][github-actions-href]
[![Codecov][codecov-src]][codecov-href]

> A vitest environment for testing code that needs a [Nuxt](https://nuxt.com) runtime environment

- [✨ &nbsp;Changelog](https://github.com/danielroe/nuxt-vitest/blob/main/CHANGELOG.md)
- [▶️ &nbsp;Playground](https://stackblitz.com/edit/nuxt-vitest)

> **Warning**
> This library is in active development and you should pin the patch version before using.

## Installation

1. First install `nuxt-vitest`:

```bash
pnpm add -D nuxt-vitest vitest

# or
yarn add --dev nuxt-vitest vitest
npm i -D nuxt-vitest vitest
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
import { defineVitestConfig } from 'nuxt-vitest/config'

export default defineVitestConfig({
  // any custom vitest config you require
})
```

4. Setting environment for your tests

By default, `nuxt-vitest` will not change your default Vitest environment, so you can do fine-grain opt-in and run Nuxt tests together with other unit tests.

We provided a filename convention that test files contains `.nuxt.`, like `*.nuxt.test.{js,ts}` and `*.nuxt.spec.{js,ts}`, will be run in Nuxt environment automatically.

Or you can add `@vitest-environment nuxt` in your test file as a comment to opt-in per test file.

```js
// @vitest-environment nuxt
import { test } from 'vitest'

test('my test', () => {
  // ... test with Nuxt environment!
})
```

Finally, you can set `environment: 'nuxt'`, to enable Nuxt environment for **all tests**.

```js
// vitest.config.ts
import { fileURLToPath } from 'node:url'
import { defineVitestConfig } from 'nuxt-vitest/config'

export default defineVitestConfig({
  test: {
    environment: 'nuxt',
    // you can optionally set nuxt-specific environment options
    // environmentOptions: {
    //   nuxt: {
    //     rootDir: fileURLToPath(new URL('./playground', import.meta.url)),
    //     overrides: {
    //       // other nuxt config you want to pass
    //     }
    //   }
    // }
  }
})
```

If you have set `environment: 'nuxt'` by default, you can then opt-out [of the default environment](https://vitest.dev/guide/environment.html#test-environment) per test file as needed.

```js
// @vitest-environment node
import { test } from 'vitest'

test('my test', () => {
  // ... test without Nuxt environment!
})
```

## 👉 Important notes

When you run your tests within the Nuxt environment, they will be running in a [`happy-dom`](https://github.com/capricorn86/happy-dom) environment. Before your tests run, a global Nuxt app will be initialised (including, for example, running any plugins or code you've defined in your `app.vue`).

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

> **Note**: `mockNuxtImport` can only be used once per test file. It is actually a macro that gets transformed to `vi.mock` and `vi.mock` is hoisted, as described [here](https://vitest.dev/api/vi.html#vi-mock).

If you need to mock a Nuxt import and provide different implementations between tests, you can do it by using a global variable as the returned value of your mock function and change its implementation within each test. Be careful to [restore mocks](https://vitest.dev/api/mock.html#mockrestore) before or after each test to undo mock state changes between runs.

```ts
// useStorageMock.ts
let useStorageMock = vi.fn(() => {
  return { value: 'mocked storage' }
})
export default useStorageMock
```

```ts
import useStorageMock from './useStorageMock'
import { mockNuxtImport } from 'nuxt-vitest/utils'

mockNuxtImport('useStorage', () => {
  return () => useStorageMock()
})

// Then, inside a test
useStorageMock.mockImplementation(() => {
  return { value: 'something else' }
})
```

### `mockComponent`

`mockComponent` allows you to mock Nuxt's component.
The first argument can be the component name in PascalCase, or the relative path of the component.
The second argument is a factory function that returns the mocked component.

For example, to mock `MyComponent`, you can:

```ts
import { mockComponent } from 'nuxt-vitest/utils'

mockComponent('MyComponent', {
  props: {
    value: String
  },
  setup(props) {
    // ...
  }
})

// relative path or alias also works
mockComponent('~/components/my-component.vue', async () => {
  // or a factory function
  return {
    setup(props) {
      // ...
    }
  }
})

// or you can use SFC for redirecting to a mock component
mockComponent('MyComponent', () => import('./MockComponent.vue'))

// your tests here
```

> **Note**: You can't reference to local variables in the factory function since they are hoisted. If you need to access Vue APIs or other variables, you need to import them in your factory function.

```ts
mockComponent('MyComponent', async () => {
  const { ref, h } = await import('vue')

  return {
    setup(props) {
      const counter = ref(0)
      return () => h('div', null, counter.value)
    }
  }
})
```

### `registerEndpoint`

`registerEndpoint` allows you create Nitro endpoint that returns mocked data. It can come in handy if you want to test a component that makes requests to API to display some data.

The first argument is the endpoint name (e.g. `/test/`).
The second argument is a factory function that returns the mocked data.

For example, to mock `/test/` endpoint, you can do:

```ts
import { registerEndpoint } from 'nuxt-vitest/utils'

registerEndpoint("/test/", () => {
  test: "test-field"
})
```

> **Note**: If your requests in a component go to external API, you can use `baseURL` and then make it empty using Nuxt Enviroment Config (`$test`) so all your requests will go to Nitro server.

### Conflict with @nuxt/test-utils

`nuxt-vitest` and `@nuxt/test-utils` need to run in different testing environments and so can't be used in the same file.

If you would like to use `@nuxt/test-utils` to conduct end-to-end tests on your Nuxt app, you can split your tests into separate files. You then either specify a test environment per-file with the special `// @vitest-environment nuxt` comment, or name your `nuxt-vitest` files with the `.nuxt.spec.ts` extension.

`app.nuxt.spec.js`

```ts
import { mockNuxtImport } from "nuxt-vitest/utils";

mockNuxtImport('useStorage', () => {
  return () => {
    return { value: 'mocked storage' }
  }
})

```

`app.e2e.spec.js`

```ts
import { setup, $fetch } from '@nuxt/test-utils';

await setup({
  setupTimeout: 10000,
});

// ...
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
