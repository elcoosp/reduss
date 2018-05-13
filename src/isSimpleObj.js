const isSimpleObj = val =>
  val === null
    ? false
    : typeof val === 'function'
      ? false
      : Array.isArray(val)
        ? false
        : typeof val === 'object'

module.exports = isSimpleObj
