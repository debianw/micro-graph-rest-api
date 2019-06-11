//
const { router } = require('microrouter')

//
module.exports = (routes = []) => {
  const handler = router(...routes)

  return fn => (req, res) => {
    if (/api/.test(req.url))
      return handler(req, res)
    return fn(req, res)
  }
}