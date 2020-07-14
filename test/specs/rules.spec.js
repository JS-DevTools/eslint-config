"use strict";

const { assert, expect } = require("chai");
const fs = require("fs");

const rulesFiles = fs.readdirSync("lib").filter((file) => file !== "index.js");

for (let file of rulesFiles) {
  describe(file, () => {
    let rules = require(`../../lib/${file}`);

    it("should be in alphabetical order", () => {
      let ruleNames = Object.keys(rules);
      let sortedRuleNames = Object.keys(rules).sort();
      expect(ruleNames).to.deep.equal(sortedRuleNames, `${file} is not in alphabetical order`);
    });

    for (let [rule, settings] of Object.entries(rules)) {
      it(rule, () => {
        if (typeof settings === "string") {
          expect(settings).to.be.oneOf(["error", "warn", "off"]);
        }
        else if (Array.isArray(settings)) {
          expect(settings).to.have.length.at.least(2);
          expect(settings[0]).to.be.oneOf(["error", "warn", "off"]);
        }
        else {
          assert.fail(`${rule} in ${file} is invalid`);
        }
      });
    }

  });
}
