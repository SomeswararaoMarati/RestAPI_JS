const axios = require('axios');
const environments = require('./environments');

class BaseAPI {
  constructor() {
    const environment = process.env.NODE_ENV || 'qa';
    this.baseURL = environments[environment];
  }

  async send(method, endpoint, data) {
    const url = `${this.baseURL}${endpoint}`;
    console.log(`Complete URL: ${url}`);

    const config = {
      method,
      url,
      headers: this.headers, // Assuming you have a headers property
      data,
    };

    const response = await axios(config);
    return response;
  }
}

module.exports = BaseAPI;