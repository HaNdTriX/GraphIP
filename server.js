const express = require('express')
const bodyParser = require('body-parser')
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express')
const schema = require('./data/schema')

const app = express()

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}))

app.use('/graphql',
  bodyParser.json(),
  graphqlExpress({ schema })
)

app.listen(3000, function () {
  const origin = `http://localhost:${this.address().port}`
  console.log(`Server            ready on ${origin}`)
  console.log(`GraphQL Endpoint  ready on ${origin}/graphql`)
  console.log(`GraphiQL Endpoint ready on ${origin}/graphiql`)
})
