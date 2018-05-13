/**
 * @param {string} path The path on which to set a new value
 * @param {*} data The data to set
 * @param {Object}  [baseObject=Object] The base object, serve as the initial accumulator, default {}
 * @returns {Object} A new object with the path provided equal to data, and optionnaly any values present in baseObject
 */

const atPathSet = (path, data, baseObject = {}) =>
  path.split('.').reduce((acc, prop, i, a) => {
    const isLastProp = i === a.length - 1
    acc[prop] = isLastProp ? data : {}
    return isLastProp ? baseObject : acc[prop]
  }, baseObject)

module.exports = atPathSet
