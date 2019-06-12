//
const { gql } = require('apollo-server-micro')

//
const typeDefs = gql`
  type Query {
    sayHello: String
  }
`

//
const resolvers = {
  Query: {
    sayHello: () => `Hello World!!!!!`
  }
}

//
module.exports = {
  typeDefs: [typeDefs],
  resolvers,
}