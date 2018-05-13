/**
 *
 * @param {Array<number>} indexes An array of indexes to pick (the order matter)
 * @param {Array<*>} arrayOfElements The array to pick values from
 * @throws Can throw an error if oyu try to pick an index which does not exist on arrayOfElements
 * @returns {Array<*>} The picked elemnts in the order from indexes argument
 */

const pickIndexes = (indexes, arrayOfElements) =>
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
