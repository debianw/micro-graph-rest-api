//
const { get } = require('microrouter')

//
module.exports = (options = {}) => {
  const { user: userDAO } = options.dao

  //
  const getAllUsers = async (req, res) => {
    const users = userDAO.getAllUsers()
    console.log(users)

    return users 
  }

  //
  return [
    get('/api/users', getAllUsers)
  ]
}