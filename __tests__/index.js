const pickIndexes = require('../src/pickIndexes')
const sumOnly = require('../src/sumOnly')
const mapKeys = require('../src/mapKeys')
const mapKeysDeep = require('../src/mapKeysDeep')
const onObjLeafs = require('../src/onObjLeafs')
const path = require('../src/path')
const atPathSet = require('../src/atPathSet')
const index = require('../src')
const isSimpleObj = require('../src/isSimpleObj')
const throwE = require('../src/throwE')

test('should return an object with all the library functions', () => {
  expect(index).toEqual({
    sumOnly,
    pickIndexes,
    mapKeys,
    mapKeysDeep,
    onObjLeafs,
    path,
    atPathSet,
    isSimpleObj,
    throwE
  })
})
