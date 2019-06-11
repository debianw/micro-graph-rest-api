//
const typeDefs = [`
  type Query {
    sayHello: String
  }
`]

//
const resolvers = {
  Query: {
    sayHello: () => `Hello World!!!!!`
  }
}

//
module.exports = (options = {}) => ({
  typeDefs,
  resolvers,
})