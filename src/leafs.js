/**
 * @type {Object} PathValueObject An object with a path and value property
 * @property {Array.<string>} path An array of string describing the path to the object leaf value
 * @property {*} value The value of the leaf located at the corresponding path
 */
/**
 * @param {object} obj The object on which the leafs are selected
 * @param {array} [previousPath=array] The accumulated path while iterating on obj properties, default to empty array, needed only for recursion, should not be a passed argument when calling the function
 * @returns {Array.<PathValueObject>} An array with object containing the leafs information (path/value)
 * @example
 * // returns [
 * //   { path: ['a', 'b', 'c'], value: 4 },
 * //   { path: ['a', 'b', 'e'], value: 6 },
 * //   { path: ['a', 'd', 'l'], value: 2 }
 * // ]
 *leafs({
 *     a: {
 *       b: { c: 4, e: 6 },
 *       d: { l: 2 }
 *     }
 *   })
 */

const leafs = (obj, previousPath = []) =>
  Object.entries(obj).reduce((acc, [key, value]) => {
    const path = previousPath.concat(key)
    return Object.keys(value).length > 0
      ? [...acc, ...leafs(value, path)]
      : [...acc, { path, value }]
  }, [])
module.exports = leafs
