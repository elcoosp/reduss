const isSimpleObj = require('./isSimpleObj')
const onObjLeafs = (fn, obj, path = []) =>
  Object.entries(obj).forEach(([key, val]) => {
    const newPath = path.concat(key)
    return isSimpleObj(val)
      ? onObjLeafs(fn, val, newPath)
      : fn({ path: newPath, value: val })
  })

module.exports = onObjLeafs
