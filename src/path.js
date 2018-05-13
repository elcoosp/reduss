const path = (path, obj) =>
  path
    .split('.')
    .reduce(
      (acc, prop) =>
        acc[prop]
          ? acc[prop]
          : throwE(
            `Property "${prop}" is undefined in the path "${path}" using the path function, check that the property exist on the object you try to access`
          ),
      obj
    )

module.exports = path
