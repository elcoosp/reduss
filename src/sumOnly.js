const reduceIf = require('./reduceIf')
/**
 *
 * @param {function} condition Retun true if the number can be summed
 * @param {Array<number>} numbers The array of numbers to sum
 * @returns {number} The sum of matching numbers
 * @example
 * // returns 6
 * sumOnly(x => x <= 3, [1,2,3,4])
 */
const sumOnly = (condition, numbers) =>
  reduceIf(condition, (acc, v) => acc + v, numbers, 0)

module.exports = sumOnly
