const { sum, nativeNull } = require('./intro')

describe('Sum function', () => {
  test('should return sum of two values', () => {
    expect(sum(1, 3)).toBe(4)
  })
  
  test('should return value correctly comparing to other', () => {
    expect(sum(2, 3)).toBeGreaterThan(4)
    expect(sum(2, 3)).toBeGreaterThanOrEqual(5)
  })
  
  test('for 2 float values', () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3)
  })
})

describe('Native Null', () => {
  test('Native null should return false value null', () => {
    expect(nativeNull()).toBe(null)
    expect(nativeNull()).toBeNull()
    expect(nativeNull()).toBeFalsy()
    expect(nativeNull()).toBeDefined()
    expect(nativeNull()).not.toBeTruthy()
    expect(nativeNull()).not.toBeUndefined()
  })
})

