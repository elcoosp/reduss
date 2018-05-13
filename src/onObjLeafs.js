const isSimpleObj = require('./isSimpleObj')
/**
 *
 * @param {function} fn The callback receiving the path and value of the leaf as an object
 * @param {object} obj The object on which the leafs are selected
 * @param {array} [path=array] The accumulated path while iterating on obj properties, default to empty, needed only for recursion, should not be a passed argument when calling the function
 * @returns {Void} Nothing
 */
const onObjLeafs = (fn, obj, path = []) =>
  Object.entries(obj).forEach(([key, val]) => {
    const newPath = path.concat(key)
    return isSimpleObj(val)
      ? onObjLeafs(fn, val, newPath)
      : fn({ path: newPath, value: val })
  })

module.exports = onObjLeafs
