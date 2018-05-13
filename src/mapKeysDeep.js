const atPathSet = require('./atPathSet')
const path = require('./path')

const mapKeysDeep = (mappers, objectToMap) => {
  const newObj = Object.assign({}, objectToMap)
  return Object.entries(mappers).reduce((acc, [pathToMap, mappingFunc]) => {
    if (pathToMap.includes('.')) {
      const mappedResult = mappingFunc(path(pathToMap, newObj))
      return atPathSet(pathToMap, mappedResult, newObj)
    } else {
      acc[pathToMap] = mappingFunc(newObj[pathToMap])
      return acc
    }
  }, newObj)
}

module.exports = mapKeysDeep