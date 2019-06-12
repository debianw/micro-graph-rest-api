//
const { DataSource } = require('apollo-datasource')

//
class UserAPI extends DataSource {
  constructor({ dao }) {
    super()
    this.userDAO = dao.user
  }

  /**
   * 
   * @param {*} param0 
   */

  initialize({ context }) {
    this.context = context
  }

  /**
   * Get all users 
   */

  async getAllUsers() {
    return this.userDAO.getAllUsers()
  }

  /**
   * Sign In 
   */

  async signIn() {
    return null
  }
}

//
module.exports = UserAPI