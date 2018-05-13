const mapKeys = require('../src/mapKeys')
test('should map key from the second argument existing in the first argument object (functions), and return original values if no mapping function is provided', () => {
  expect(
    mapKeys(
      { str: x => x.toUpperCase(), num: n => n + 3 },
      {
        str: 'gdf',
        num: 1,
        plop: 'a'
      }
    )
  ).toEqual({ str: 'GDF', num: 4, plop: 'a' })
})

test('should return same object if called with an empty object as first arg', () => {
  expect(
    mapKeys(
      {},
      {
        str: 'gdf',
        num: 1,
        plop: 'a'
      }
    )
  ).toEqual({
    str: 'gdf',
    num: 1,
    plop: 'a'
  })
})
