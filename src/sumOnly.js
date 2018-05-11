module.exports = condition => numbers =>
  numbers.reduce((acc, n) => (condition(n) ? acc + n : acc), 0)
