const { validate } = require("./users-service.js");

describe("user-service.js", function () {
  describe(".validate()", function () {
    it("should return false if the user is missing username or password", () => {
      expect(validate({})).toBe(false);
    });

    it("should return true when the user has a username and a password", () => {
      expect(validate({ username: "username", password: "password" })).toBe(
        true
      );
    });

    it.todo(
      "users should have an isAdmin property that should be true or false"
    );
    it.todo("");
  });
});
