//
const jwt = require('jsonwebtoken')
const { AuthenticationError } = require('apollo-server-micro')

//
exports.decodeToken = (token, secret) => jwt.verify(token, secret) 

//
exports.getToken = req => {
  const { authorization } = req.headers
  const { query } = req

  if (authorization && authorization.split(' ')[0] === 'Bearer') {
    return authorization.split(' ')[1];
  }
  if (query && query.token) {
    return query.token;
  }
  return authorization || '';
}

//
exports.authCheck = fn => (_, args, context)  => {
  if (!context.session) throw new AuthenticationError('you must be logged in!')
  return fn(_, args, context)
}