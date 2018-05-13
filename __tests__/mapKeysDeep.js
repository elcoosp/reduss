const mapKeysDeep = require('../src/mapKeysDeep')
test('mapKeys with recursion if the key is in dot notation', () => {
  expect(
    mapKeysDeep(
      {
        str: x => x.toUpperCase(),
        num: n => n + 3,
        'obj.prop.last': x => x * 2
      },
      {
        str: 'gdf',
        obj: {
          prop: {
            last: 4
          }
        },
        num: 1,
        plop: 'a'
      }
    )
  ).toEqual({
    str: 'GDF',
    num: 4,
    obj: {
      prop: {
        last: 8
      }
    },
    plop: 'a'
  })
})

test('should return same object if called with an empty object as first arg', () => {
  expect(
    mapKeysDeep(
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

test('should return a brand new object and not modiffy the one provided', () => {
  const obj = { a: 8, obj: { prop: { last: 6 } } }
  mapKeysDeep(
    {
      a: () => 698,
      'obj.prop.last': x => x * 2
    },
    obj
  )

  expect(obj).toEqual({ a: 8, obj: { prop: { last: 6 } } })
})
