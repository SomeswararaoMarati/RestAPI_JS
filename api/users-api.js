const BaseAPI = require('./base-api');

class UsersAPI extends BaseAPI {
  async getUsers() {
    return this.get('/users');
  }

  async createUser(user) {
    return this.post('/users', user);
  }
}

module.exports = UsersAPI;