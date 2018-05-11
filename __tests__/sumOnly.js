const sumOnly = require('../src/sumOnly')
test('should sum only numbers which respect the condition fnction', () => {
  expect(sumOnly(x => x > 4)([1, 2, 6, 1, 6])).toBe(12)
})
