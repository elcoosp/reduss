const reduceIf = require('../src/reduceIf')

test('should reduce with the second argument if the first callback return true', () => {
  expect(
    reduceIf(
      x => x.length < 3,
      (acc, v) => acc + ' ' + v,
      ['li', 'tt', 'le', 'word'],
      ''
    )
  ).toBe(' li tt le')
})

test('should have an initAcc default parameter to Array', () => {
  expect(
    reduceIf(x => x.length < 3, (acc, v) => [...acc, v], [
      'li',
      'tt',
      'le',
      'word'
    ])
  ).toEqual(['li', 'tt', 'le'])
})
