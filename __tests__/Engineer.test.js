const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  let engineer;

  beforeEach(() => {
    engineer = new Engineer("John Doe", "1", "johndoe@example.com", "johndoe");
  });

  it("gets the name", () => {
    expect(engineer.getName()).toEqual("John Doe");
  });

  it("gets the id", () => {
    expect(engineer.getId()).toEqual("1");
  });

  it("gets the email", () => {
    expect(engineer.getEmail()).toEqual("johndoe@example.com");
  });

  it("gets the github username", () => {
    expect(engineer.getGithub()).toEqual("johndoe");
  });

  it("gets the role", () => {
    expect(engineer.getRole()).toEqual("Engineer");
  });
});
