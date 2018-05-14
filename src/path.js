/**
 *
 * @param {string} path A string representing the path to access (e.g. 'some.prop.nested')
 * @param {Object} objToAccess The accessed object
 * @throws If we try to access a non existing property on objToAccess
 * @return {*} The value corresponding to the path
 * @example
 * // returns 6
 * path('a.b.c', { a: { b: { c: 6 } } })
 */
const path = (path, objToAccess) =>
  path.split('.').reduce((acc, prop) => {
    if (acc[prop]) return acc[prop]
    else {
      throw new Error(
        `Property "${prop}" is undefined in the path "${path}" using the path function, check that the property exist on the object you try to access`
      )
    }
  }, objToAccess)

module.exports = path
