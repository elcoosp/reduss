const atPathSet = (path, data, object = {}) =>
  path.split('.').reduce((acc, prop, i, a) => {
    const isLastProp = i === a.length - 1
    acc[prop] = isLastProp ? data : {}
    return isLastProp ? object : acc[prop]
  }, object)

module.exports = atPathSet
