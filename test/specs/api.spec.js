"use strict";

const ________CONFIG__________ = require("../../");
const { expect } = require("chai");

describe("________CONFIG__________() API", () => {

  it("should work without any arguments", () => {
    let result = ________CONFIG__________();
    expect(result).to.equal("Hello, world.");
  });

  it("should accept a custom greeting", () => {
    let result = ________CONFIG__________({ greeting: "Hi there" });
    expect(result).to.equal("Hi there, world.");
  });

  it("should accept a custom subject", () => {
    let result = ________CONFIG__________({ subject: "Michael" });
    expect(result).to.equal("Hello, Michael.");
  });

  it("should accept a custom greeting and subject", () => {
    let result = ________CONFIG__________({ greeting: "Yo", subject: "man" });
    expect(result).to.equal("Yo, man.");
  });

  it('should not allow a greeting of "goodbye"', () => {
    function sayGoodbye () {
      ________CONFIG__________({ greeting: "Goodbye" });
    }

    expect(sayGoodbye).to.throw("Cannot say goodbye");
  });

});
