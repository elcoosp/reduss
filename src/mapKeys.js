/***
 interface mappers {
   (mapper: Any) => Any
 }

 mapKeys(mappers: mappers) => (objectToMap: Object) => Object
 */
const mapKeys = mappers => objectToMap =>
  Object.entries(objectToMap).reduce((acc, [key, val]) => {
    acc[key] = mappers[key] ? mappers[key](val) : val
    return acc
  }, {})
module.exports = mapKeys
