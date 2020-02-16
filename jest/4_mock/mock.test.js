const { map } = require('./mock')

describe('map function:', () => {
  let array = []
  let fn = jest.fn()

  beforeEach(() => {
    array = [1, 2, 3, 5]
    fn = jest.fn(x => x ** 2)
    map(array, fn)
  })

  test('should call callback', () => {
    expect(fn).toBeCalled()
  })

  test('should call callback 4 times', () => {
    expect(fn).toBeCalledTimes(4)
    expect(fn.mock.calls.length).toBe(4)
  })

  test('should pow 2 each element', () => {
    expect(fn.mock.results[0].value).toBe(1)
    expect(fn.mock.results[1].value).toBe(4)
    expect(fn.mock.results[2].value).toBe(9)
    expect(fn.mock.results[3].value).toBe(25)
  })

  test('should fn work', () => {
    fn.mockReturnValueOnce(100)
    fn.mockReturnValueOnce(200)
    fn.mockReturnValue('42')

    expect(fn()).toBe(100)
    expect(fn()).toBe(200)
    expect(fn()).toBe('42')
    expect(fn()).toBe('42')
  })
}) 