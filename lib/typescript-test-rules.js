"use strict";

/**
 * Relax some JavaScript rules for testing purposes
 */
module.exports = {
  /**
   * Allow empty/unused classes
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extraneous-class.md
   */
  "@typescript-eslint/no-extraneous-class": "off",

  /**
   * Allow async functions without an `await` keyword
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-await.md
   */
  "@typescript-eslint/require-await": "off",

  /**
   * Ignore unnecessary `return await` statements
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/return-await.md
   */
  "@typescript-eslint/return-await": "off",
};
