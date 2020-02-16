const axios = require('axios')
const Ajax = require('./async')

jest.mock('axios')

describe('Ajax echo:', () => {
  test('return value type Async', async () => {
    const value = 'some data'
    const result = await Ajax.echo(value)
    expect(result).toBe(value)
  })

  test('should return value with promise', () => {
    const value = 'some data'
    return Ajax.echo(value).then(data => {
      expect(data).toBe(value)
    })
  })

  test('should catch error with promise', async () => {
    try {
      await Ajax.echo()
    } catch(e) {
      expect(e.message).toBe('error')
    }
  })

  test('should catch error with promise', () => {
    return Ajax.echo().catch(error => {
      expect(error).toBeInstanceOf(Error)
    })
  })
})

describe('ajax get:', () => {
  let response
  let todos

  beforeEach(() => {
    todos = [{
      id: 1,
      title: 'To do 1',
      completed: false
    }]

    response = {
      data: {
        todos
      }
    }
  })

  test('should return data from backend', () => {
    axios.get.mockReturnValue(response)
    return Ajax.get().then(data => {
      expect(data.todos).toEqual(todos)
    })
  })
})