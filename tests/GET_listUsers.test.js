const axios = require("axios");
const { expect } = require("chai");
const BaseAPI = require("../api/base-api.js");
const HttpMethod = require("../data/enums/http-method.js");


describe("GET API Request Tests", async () => {
  const api = new BaseAPI();

  it("should send a request to fetch users list", async () => {
    const res = await api.send(HttpMethod.GET, "/api/users?page=2");
    expect(res.status).equal(200);
    expect(res.data.page).equal(2);
    expect(res.data.per_page).equal(6);
  });

});