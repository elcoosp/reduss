// pickIndexes(indexes: [Number...]) => (arrayOfElements: [Any...]) => [Any...], throws
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
