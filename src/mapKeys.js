/**
 * @param {Object<string, function>} mappers Object with keys corresponding to paths and value corresponding to maping function taking the value at objectToMap path
 * @param {Object} objectToMap The source object for the mapping
 * @returns {Object} A new object with the mapped keys
 * @example
 * // returns { str: 'SOMEVALUE', num: 4 }
 * mapKeys(
 *    { str: x => x.toUpperCase(), num: n => n + 3 },
 *    { str: 'someValue',
 *      num: 1,
 *    }
 * )
 */
const mapKeys = (mappers, objectToMap) =>
  Object.entries(objectToMap).reduce((acc, [key, val]) => {
    acc[key] = mappers[key] ? mappers[key](val) : val
    return acc
  }, {})
module.exports = mapKeys
