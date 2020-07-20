"use strict";

/**
 * Relax some JavaScript rules for testing purposes
 */
module.exports = {
  /**
   * Allow empty functions
   *
   * @see https://eslint.org/docs/rules/no-empty-function
   */
  "no-empty-function": "off",

  /**
   * Ignore unnecessary `return await` statements
   *
   * @see https://eslint.org/docs/rules/no-return-await
   */
  "no-return-await": "off",

  /**
   * allow async functions without an `await` keyword
   *
   * @see https://eslint.org/docs/rules/require-await
   */
  "require-await": "off",
};
