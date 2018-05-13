const isSimpleObj = require('../src/isSimpleObj')

test('should return true only for simple objects (no function, array, null)', () => {
  const myMock = jest.fn()
  expect(isSimpleObj({})).toBeTruthy()
  expect(isSimpleObj([])).toBeFalsy()
  expect(isSimpleObj(myMock)).toBeFalsy()
  expect(isSimpleObj(null)).toBeFalsy()
})
