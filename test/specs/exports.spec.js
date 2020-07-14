"use strict";

const commonJSExport = require("../../");
const { default: defaultExport } = require("../../");
const { expect } = require("chai");

describe("ESLint Config", () => {

  it("should export the ESLint config as the default CommonJS export", () => {
    expect(commonJSExport).to.be.an("object");
  });

  it("should not have a default ESM export", () => {
    expect(defaultExport).to.equal(undefined);
  });

  it("should only contain ESLint overrides", () => {
    expect(commonJSExport).to.have.same.keys(
      "overrides",
    );
  });

});
