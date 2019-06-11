//
const { users: usersMock } = require('../utils/mocks')

//
const typeDefs = [
  `
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
]

//
const resolvers = {
  Query: {
    users: () => usersMock 
  }
}

//
module.exports = (options = {})  => {
  return {
    typeDefs,
    resolvers
  }
}