/**
 * @typedef {Object} options
 * @property {boolean} endTrim Wheter or not trim the value after reducing
 */

/**
 *
 * @param {Array<string>} strArray An array of string to reduce
 * @param {function} [reducer] Take all the arguments from a regulare reduce callback, default to concatenation if none is provided
 * @param {options} [options] An option object
 * @returns {string} A string
 */
const reduceNewline = (strArray, reducer, options) => {
  const reducedValue = strArray.reduce((acc, v, ...args) => {
    return (reducer ? reducer(acc, v, ...args) : acc + v) + '\n'
  }, '')
  return options && options.endTrim ? reducedValue.trim() : reducedValue
}
module.exports = reduceNewline
