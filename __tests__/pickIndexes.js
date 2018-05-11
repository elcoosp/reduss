const pickIndexes = require('../src/pickIndexes')
test('should return only the elements t the corresponding indexes', () => {
  expect(pickIndexes([2, 4, 1])([1, 2, 6, 1, 6])).toEqual([6, 6, 2])
})

test('should throw an error if we want to pick an index superior to the arrayOfElements length', () => {
  expect(() => pickIndexes([2, 4, 1, 15])([1, 2, 6, 1, 6])).toThrowError(
    `Can not pick index 15 on an array of length 5`
  )
  expect(() => pickIndexes([2, 4, 1, 5])([1, 2, 6, 1, 6])).toThrowError(
    `Can not pick index 5 on an array of length 5`
  )
})
