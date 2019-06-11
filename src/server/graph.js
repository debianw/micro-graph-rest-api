//
const _ = require('lodash')
const createGQLHandler = require('../utils/create-gql-handler')

//
module.exports = ({ graph }) => {
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

  return createGQLHandler({
    typeDefs,
    resolvers,
  })
}