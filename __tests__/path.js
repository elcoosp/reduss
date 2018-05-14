const path = require('../src/path')

test('should return the value corresponding to the path provided', () => {
  expect(path('a.b.c', { a: { b: { c: 6 } } })).toEqual(6)
})

test('should throw an error if the path reference inexistent properties', () => {
  expect(() => path('a.b.c.d', { a: { b: { c: 6 } } })).toThrow()
})
