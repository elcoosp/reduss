/**
 *
 * @param {*} val The value to test
 * @returns {boolean} Return true if val is an object but not a function, array nor a value
 */
const isSimpleObj = val =>
  val === null
    ? false
    : typeof val === 'function'
      ? false
      : Array.isArray(val)
        ? false
        : typeof val === 'object'

module.exports = isSimpleObj
