const axios = require("axios");
const { expect } = require("chai");
const BaseAPI = require("../api/base-api.js");
const HttpMethod = require("../data/enums/http-method.js");
const User = require("../data/models/user.js"); // Corrected import path
const userRequestBody = require("../data/models/usersData.js");

describe("POST API Request Tests", async () => {
  const api = new BaseAPI();
  let requestBody;

  before(async () => {
    requestBody = {
      id:101,
      Name: "123 Main St",
      email: "smithdoe@example.com", //Optional
    };
  });
  it("should send a request with Data to create User", async () => {
    //const user = new User(110, "Smith Doe", "smithdoe@example.com");
    const res = await api.send(HttpMethod.POST, "/api/users", requestBody);
    expect(res.status).equal(201);
    expect(res.data).to.have.property("id"); 
  });
});
