//
const _ = require('lodash')
const createGQLHandler = require('../utils/create-gql-handler')
const createGraphContext = require('../utils/create-gql-context')

//
module.exports = ({ graph, dataSources, config }) => {
  const entityNames = Object.keys(graph)
  const getTypeDefs = (entityName => graph[entityName].typeDefs)
  const getResolvers = (entityName => graph[entityName].resolvers)

  const typeDefs = [].concat(
    ...entityNames.map(getTypeDefs)
  )

  const resolvers = _.merge(
    {},
    ...entityNames.map(getResolvers)
  ) 

  const context = createGraphContext({ config })

  return createGQLHandler({
    typeDefs,
    resolvers,
    dataSources,
    context,
  })
}