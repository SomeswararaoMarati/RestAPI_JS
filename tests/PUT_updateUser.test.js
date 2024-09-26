const axios = require("axios");
const { expect } = require("chai");
const BaseAPI = require("../api/base-api.js");
const HttpMethod = require("../data/enums/http-method.js");
const User = require("../data/models/user.js"); // Corrected import path
const userRequestBody = require("../data/models/usersData.js");


describe("PUT API Request Tests", async () => {
  const api = new BaseAPI();

  let requestBody;

  before(async () => {
    requestBody = {
      Name: "123 Main St",
      job:"tester123"
    };
  });

  it("should send a request with Data to update User", async () => {
    //const user = new User(110, "Smith Doe", "smithdoe@example.com");
    const res = await api.send(HttpMethod.PUT, "/api/users/2", requestBody);
    expect(res.status).equal(200);
    expect(res.data).to.have.property("job"); 
    expect(res.data).to.have.property("Name"); 
    expect(res.data).to.have.property("updatedAt"); 
  });
});