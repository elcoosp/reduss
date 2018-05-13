const atPathSet = require('./atPathSet')
const path = require('./path')

/**
 * @param {Object<string, function>} mappers Object with keys corresponding to paths (or simple keys) and value corresponding to maping function taking the value at objectToMap path
 * @param {Object} objectToMap The source object for the mapping
 * @returns {Object} A new object with the mapped paths
 */
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
