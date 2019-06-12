//
const { getToken, decodeToken } = require('./http-helpers')
const { users: mockUsers } = require('./mocks')

//
module.exports = ({ config }) => async ({ req }) => {
  let session

  try {
    const token = getToken(req, config.secret)

    if (token === 'demo')
      session = { user: mockUsers[0] }
    else
      session = token ? decodeToken(token) : null
  } catch(err) {
    session = null      
  }
 
  return {
    session
  }
}