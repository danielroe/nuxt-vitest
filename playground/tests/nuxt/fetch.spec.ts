import { describe, it, expect } from 'vitest'
import { compare } from 'compare-versions'

const shouldSupportNativeFetch = () => {
  const options = process.env.NODE_OPTIONS || ''
  if (
    compare(process.version, '17.0.0', '>=') &&
    options.includes('experimental-fetch')
  ) {
    return true
  }

  if (
    compare(process.version, '18.0.0', '>=') &&
    !options.includes('no-experimental-fetch')
  ) {
    return true
  }
  return false
}
const isFetchPolyfill = process.env.VITEST_FETCH_POLYFILL === 'true'
const isSupportNativeFetch = shouldSupportNativeFetch()


describe('fetch test', () => {
  it.runIf(!isFetchPolyfill && !isSupportNativeFetch)(
    'failed to use $fetch when fetch is not supported',
    () => {
      expect(
        $fetch('https://jsonplaceholder.typicode.com/todos/1')
      ).rejects.toThrowError()
    }
  )

  // Node16 and VITEST_FETCH_POLYFILL=true
  it.runIf(isFetchPolyfill)('can use $fetch', () => {
    expect(
      $fetch('https://jsonplaceholder.typicode.com/todos/1')
    ).resolves.toMatchObject({ id: 1 })
  })

  // Node17(with experimental-fetch) or Node18 or higher(without no-experimental-fetch)
  it.runIf(isSupportNativeFetch)('can use $fetch', () => {
    expect(
      $fetch('https://jsonplaceholder.typicode.com/todos/1')
    ).resolves.toMatchObject({ id: 1 })
  })
})
