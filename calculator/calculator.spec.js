const { add } = require("./calculator.js");

// test away!
describe("calculator.js", () => {
  it("should run tests without errors", () => {
    expect(true).toBe(true);
  });

  describe(".add()", () => {
    it("should add two numbers", () => {
      expect(add(2, 2)).toBe(4);
      expect(add(4, 3)).toBe(7);
      expect(add(3, 5)).toBe(8);
    });

    it("should return 0 when called with no arguments", () => {
      expect(add()).toBe(0);
    });

    it("should return the number when called with a single number", () => {
      expect(add(3)).toBe(3);
      expect(add(5)).toBe(5);
    });

    it("should sum a list of numbers seperated by comma", () => {
      expect(add(1, 2, -5)).toBe(-2);
      expect(add(0, 2, 3)).toBe(5);
    });

    it("should support an array of numbers", () => {
      expect(add([2, 3, 4])).toBe(9);
      expect(add([0, 2, 3])).toBe(5);
    });
  });
});
