//
const createRESTHandler = require('../utils/create-rest-handler')

//
module.exports = ({ rest }) => {
  const routes = [].concat(
    ...Object.keys(rest)
    .filter(entityName => rest[entityName])
    .map(entityName => rest[entityName]))

  return createRESTHandler([
    ...routes
  ])
}