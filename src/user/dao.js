//
const { users } = require('../utils/mocks')

//
module.exports = (options = {}) => {
  //
  const getAllUsers = () => users 

  //
  return {
    getAllUsers
  }
}