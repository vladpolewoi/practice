class Lodash {
  compact(array) {
    return array.filter(value => !!value)
  }

  groupBy(array, prop) {
    return array.reduce((acc, value) => {
      const key = typeof prop === 'function' ? prop(value) : value[prop]
      if (!acc[key]) {
        acc[key] = []
      }
      acc[key].push(value)
      return acc
    }, {})
  }
}

module.exports = Lodash