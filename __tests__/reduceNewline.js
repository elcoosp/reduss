const reduceNewline = require('../src/reduceNewline')

test('should default to concatenate value if no reducer is provided', () => {
  expect(reduceNewline(['some', 'cool', 'text'])).toBe(`some\ncool\ntext\n`)
})

test('should reduce with the provided function and add a new line at each accumulation', () => {
  expect(
    reduceNewline(['some', 'cool', 'text'], (acc, x) => acc + x.toUpperCase())
  ).toBe(`SOME\nCOOL\nTEXT\n`)
})

test('should  trim the final string if the option endTrim is set to true', () => {
  expect(
    reduceNewline(['some', 'cool', 'text'], (acc, x) => acc + x.toUpperCase(), {
      endTrim: true
    })
  ).toBe(`SOME\nCOOL\nTEXT`)
})
