const { location } = require('./connectors')

module.exports = {
  RootQuery: {
    me () {
      return location()
    },
    ip (_, { value }) {
      return location(value)
    },
    hostname (_, { value }) {
      return location(value)
    }
  }
}
