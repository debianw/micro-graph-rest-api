//
const { ApolloServer } = require('apollo-server-micro')

//
module.exports = ({ typeDefs, resolvers, dataSources, context, ...handlerOptions }) => {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources,
    context,
  })

  const handler = apolloServer.createHandler(handlerOptions)

  return fn => (req, res) => {
    if (/graph/.test(req.url))
      return handler(req, res)
    return fn(req, res)
  }
}