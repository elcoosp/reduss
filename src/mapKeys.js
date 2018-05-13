/**
 * @param {Object<string, function>} mappers Object with keys corresponding to keys and value corresponding to maping function taking the value at objectToMap path
 * @param {Object} objectToMap The source object for the mapping
 * @returns {Object} A new object with the mapped keys
 */
const mapKeys = (mappers, objectToMap) =>
  Object.entries(objectToMap).reduce((acc, [key, val]) => {
    acc[key] = mappers[key] ? mappers[key](val) : val
    return acc
  }, {})
module.exports = mapKeys
