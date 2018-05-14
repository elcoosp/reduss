const leafs = require('../src/leafs')

test('should return an array of object with path and value properties corresponding to the leafs of the object', () => {
  expect(
    leafs({
      a: {
        b: { c: 4, e: 6 },
        d: { l: 2 }
      }
    })
  ).toEqual(
    expect.arrayContaining([
      { path: ['a', 'b', 'c'], value: 4 },
      { path: ['a', 'b', 'e'], value: 6 },
      { path: ['a', 'd', 'l'], value: 2 }
    ])
  )
})
