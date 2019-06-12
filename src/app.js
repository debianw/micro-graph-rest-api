//
const micro = require('micro')
const user = require('./user')
const share = require('./share')
const compose = require('micro-compose')
const compress = require('micro-compress')
const createGraphAPI = require('./server/graph')
const createRestAPI = require('./server/rest')

//
module.exports = (options = {}) => {

  // Attach DAO
  options.dao = {
    user: user.dao(options)
  }

  // Attach GraphQL Schema
  options.graph = {
    share: share.graph,
    user: user.graph,
  }

  // Attach REST Routes
  options.rest = {
    user: user.rest(options)
  }

  // Attach Datasources
  options.dataSources = () => ({
    user: new user.datasource({
      dao: options.dao
    })
  })

  const graphQLApi = createGraphAPI({
    config: options.config,
    graph: options.graph,
    dataSources: options.dataSources,
  })

  const restApi = createRestAPI(options)

  const serviceOptions = compose(
    compress,
    graphQLApi,
    restApi,
  )((req, res) => {
    return {
      ok: true,
    }
  })

  const server = micro(serviceOptions)

  //
  server.listen(4001, () => {
    console.log(`🚀 server listening on port 4001`)
  })
}
