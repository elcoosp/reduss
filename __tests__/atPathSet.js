const atPathSet = require('../src/atPathSet')

test('should set the the value on the path of the provided object, returning a new object', () => {
  const input = atPathSet('e.f.g', 4, { thing: 'b' })
  const output = {
    thing: 'b',
    e: {
      f: {
        g: 4
      }
    }
  }
  expect(input).toEqual(output)
})

test('should create the object if none is rovided', () => {
  const input = atPathSet('e.f.g', 4)
  const output = {
    e: {
      f: {
        g: 4
      }
    }
  }
  expect(input).toEqual(output)
})

test('should preserve previous property on the same key object ', () => {
  expect(atPathSet('some.prop.one', 1, atPathSet('some.prop.two', 2))).toEqual({
    some: { prop: { one: 1, two: 2 } }
  })
})
