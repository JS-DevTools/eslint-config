"use strict";

const eslintConfig = require("../..");
const { expect } = require("chai");

for (let override of eslintConfig.overrides) {
  describe(`${override.files} overrides`, () => {

    it("should explicitly set parserOptions.sourceType", () => {
      expect(override.parserOptions).to.be.an("object");
      expect(override.parserOptions.sourceType).to.be.a("string").with.length.above(0);
    });

    it("should explicitly set parserOptions.ecmaVersion", () => {
      expect(override.parserOptions).to.be.an("object");
      expect(override.parserOptions.ecmaVersion).to.equal(2020);
    });

    it("should explicitly set env.es2020", () => {
      expect(override.env).to.be.an("object");
      expect(override.env.es2020).to.equal(true);
    });

    it("should explicitly set env.shared-node-browser", () => {
      expect(override.env).to.be.an("object");
      expect(override.env["shared-node-browser"]).to.equal(true);
    });

  });
}
