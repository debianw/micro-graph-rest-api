//
const { gql } = require('apollo-server-micro')
const { authCheck } = require('../utils/http-helpers')

//
const typeDefs = gql`
  type User {
    id: ID!
    username: String
    firstName: String
    lastName: String
  }

  extend type Query {
    users: [User]
  }
`

//
const resolvers = {
  Query: {
    users: authCheck((_, args, { dataSources }) => dataSources.user.getAllUsers())
  }
}

//
module.exports = {
  typeDefs: [typeDefs],
  resolvers
}