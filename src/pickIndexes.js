/**
 *
 * @param {Array<number>} indexes The array of indexes to pick in the order
 * @return {(arrayOfElements: Array) => Array} Return a new array of only the elements at the given indexes from the arrayOfElements second argument
 */
const pickIndexes = indexes => arrayOfElements =>
  indexes.reduce((acc, i) => {
    if (arrayOfElements.length <= i) {
      throw new Error(
        `Can not pick index ${i} on an array of length ${
          arrayOfElements.length
        }`
      )
    }
    return acc.concat(arrayOfElements[i])
  }, [])

module.exports = pickIndexes
