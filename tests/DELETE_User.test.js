const axios = require("axios");
const { expect } = require("chai");
const BaseAPI = require("../api/base-api.js");
const HttpMethod = require("../data/enums/http-method.js");
const User = require("../data/models/user.js"); // Corrected import path

describe("DELETE API Request Tests", async () => {
  const api = new BaseAPI();

  it("should send a request to delete user", async () => {
    const res = await api.send(HttpMethod.DELETE, "/api/users/2");
    expect(res.status).equal(204);
  });

});