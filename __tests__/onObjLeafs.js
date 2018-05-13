const onObjLeafs = require('../src/onObjLeafs')

test('should execute a function for each leaf of an object', () => {
  const cb = jest.fn()
  onObjLeafs(cb, {
    a: {
      b: { c: 4 },
      d: { l: 2 }
    }
  })

  expect(cb.mock.calls.length).toBe(2)
})

test('should pass an object to the function with path and value key', () => {
  const cb = jest.fn()
  onObjLeafs(cb, {
    a: {
      b: { c: 4 },
      d: { l: 2 }
    }
  })

  expect(cb.mock.calls[0][0]).toEqual({ path: ['a', 'b', 'c'], value: 4 })
  expect(cb.mock.calls[1][0]).toEqual({ path: ['a', 'd', 'l'], value: 2 })
})
