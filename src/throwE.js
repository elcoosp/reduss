/**
 *
 * @param {string} errorMessage  The error message
 * @throws Throw a new error with the provided message
 */
const throwE = errorMessage => {
  throw new Error(errorMessage)
}

module.exports = throwE
