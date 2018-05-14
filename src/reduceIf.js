/**
 *
 * @param {function} condition Take as first argment the current value and next all the reducer argument (acumulator, index, array) and return true if the reducer should be called
 * @param {function} reducer Take all the reducer argument (acumulator, value, index, array), return the new accumuulator
 * @param {Array} array An array to reduce
 * @param {*} [initAcc=Array] The initial accumulator, default empty array
 * @returns {*} The sum of matching numbers
 * @example
 * // returns 6
 * reduceIf(x => x <= 3, (acc, v) => acc + v, [1,2,3,4], 0)
 */
const reduceIf = (condition, reducer, array, initAcc = []) =>
  array.reduce(
    (acc, value, ...rest) =>
      condition(value, acc, ...rest) ? reducer(acc, value, ...rest) : acc,
    initAcc
  )

module.exports = reduceIf
