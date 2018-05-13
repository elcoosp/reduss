const throwE = require('../src/throwE')

test('should throww an error if the path reference inexistent properties', () => {
  expect(() => throwE('Some error')).toThrowError('Some error')
})
