import { expect, describe, test } from "vitest"


describe('test mock in setup file', () => {
    test('stubbed env to be "true"', () => {
        expect(process.env.stubbed).toBe('true')
    })
})