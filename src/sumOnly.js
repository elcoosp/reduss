/**
sumOnly(condition: Number => Boolean) => (numbers: [Number...]) => Number
*/
const sumOnly = (condition, numbers) =>
  numbers.reduce((acc, n) => (condition(n) ? acc + n : acc), 0)

module.exports = sumOnly
