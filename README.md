<h1 align="center">vitest-environment-nuxt</h1>
<p align="center">An in-development vitest environment with support for testing code that needs a Nuxt runtime environment.</p>

<p align="center">

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions][github-actions-src]][github-actions-href]
[![Codecov][codecov-src]][codecov-href]

</p>

> An in-development vitest environment with support for testing code that needs a Nuxt runtime environment

⚠️ This library is in active development and you should pin the patch version before using.

## Quick Start

First install `vitest-environment-nuxt`:

```bash
yarn add --dev vitest-environment-nuxt

# or npm
npm i -D vitest-environment-nuxt

# or pnpm
pnpm add -D vitest-environment-nuxt
```

## 💻 Development

- Clone this repository
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable` (use `npm i -g corepack` for Node.js < 16.10)
- Install dependencies using `pnpm install`
- Stub the library using `pnpm dev:prepare`
- Run interactive tests using `pnpm test`

## License

Made with ❤️

Published under [MIT License](./LICENCE).

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/vitest-environment-nuxt?style=flat-square
[npm-version-href]: https://npmjs.com/package/vitest-environment-nuxt
[npm-downloads-src]: https://img.shields.io/npm/dm/vitest-environment-nuxt?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/vitest-environment-nuxt
[github-actions-src]: https://img.shields.io/github/workflow/status/danielroe/vitest-environment-nuxt/ci/main?style=flat-square
[github-actions-href]: https://github.com/danielroe/vitest-environment-nuxt/actions?query=workflow%3Aci
[codecov-src]: https://img.shields.io/codecov/c/gh/danielroe/vitest-environment-nuxt/main?style=flat-square
[codecov-href]: https://codecov.io/gh/danielroe/vitest-environment-nuxt
