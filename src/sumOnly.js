/**
 *
 * @param {function} condition Retun true if the number can be summed
 * @param {Array<number>} numbers The array of numbers to sum
 * @returns {number} The sum of matching numbers
 */
const sumOnly = (condition, numbers) =>
  numbers.reduce((acc, n) => (condition(n) ? acc + n : acc), 0)

module.exports = sumOnly
