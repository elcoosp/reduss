/**
 * @param {(number) => boolean} condition A function returning true if the current iterated number must be summed, otherwise false
 * @return {(numbers: Array<number>) => number} The sum of the numbers passing the condition
 */
const sumOnly = condition => numbers =>
  numbers.reduce((acc, n) => (condition(n) ? acc + n : acc), 0)

module.exports = sumOnly
