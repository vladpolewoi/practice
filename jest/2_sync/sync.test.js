const Lodash = require('./sync.js')

const _ = new Lodash()

describe('Lodash compact:', () => {
  let arr = []
  beforeEach(() => {
    arr = [false, 42, null, 0, '0', '', true, undefined]
  })

  test('should be defined', () => {
    expect(_.compact).toBeDefined()
    expect(_.compact).not.toBeUndefined()
  })

  test('should remove falsy values from array', () => {
    const result = [42, '0', true]
    expect(_.compact(arr)).toEqual(result)
  })

  test('should not contain falsy values', () => {
    expect(_.compact(arr)).not.toContain(false)
    expect(_.compact(arr)).not.toContain(0)
    expect(_.compact(arr)).not.toContain('')
    expect(_.compact(arr)).not.toContain(null)
    expect(_.compact(arr)).not.toContain(undefined)
  })
})

describe('Lodash group by', () => {
  test('should be defined', () => {
    expect(_.compact).toBeDefined()
    expect(_.compact).not.toBeUndefined()
  })

  test('should group array items by Math.floor', () => {
    const arr = [2.2, 2.4, 4.2, 3.1]
    const result = {
      2: [2.2, 2.4],
      4: [4.2],
      3: [3.1]
    }
    expect(_.groupBy(arr, Math.floor)).toEqual(result)
  })

  test('should group array items by length', () => {
    const arr = ['one', 'two', 'three']
    const result = {
      3: ['one', 'two'],
      5: ['three']
    }
    expect(_.groupBy(arr, 'length')).toEqual(result)
  })

  test('should not return array', () => {
    expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array)
  })
})