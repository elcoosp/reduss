const pickIndexes = require('../src/pickIndexes')
const sumOnly = require('../src/sumOnly')
const index = require('../src')
const mapKeys = require('../src/mapKeys')
test('should return an object with all the library functions', () => {
  expect(index).toEqual({
    sumOnly,
    pickIndexes,
    mapKeys
  })
})
