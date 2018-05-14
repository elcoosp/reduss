const index = require('../src')
const pickIndexes = require('../src/pickIndexes')
const sumOnly = require('../src/sumOnly')
const mapKeys = require('../src/mapKeys')
const mapKeysDeep = require('../src/mapKeysDeep')
const leafs = require('../src/leafs')
const path = require('../src/path')
const atPathSet = require('../src/atPathSet')

test('should return an object with all the library functions', () => {
  expect(index).toEqual({
    sumOnly,
    pickIndexes,
    mapKeys,
    mapKeysDeep,
    leafs,
    path,
    atPathSet
  })
})
