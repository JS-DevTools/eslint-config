"use strict";

/**
 * These TypeScript rules require type information, which means they only work for files that
 * are referenced by the tsconfig.json file.
 */
module.exports = {
  /**
   * Disallows awaiting a value that is not a Thenable
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/await-thenable.md
   */
  "@typescript-eslint/await-thenable": "error",

  /**
   * Encourages use of dot notation whenever possible
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md
   */
  "@typescript-eslint/dot-notation": "error",

  /**
   * Warns about .toString() calls that may produce non-useful stringified values (e.g. "[object Object]")
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-base-to-string.md
   */
  "@typescript-eslint/no-base-to-string": [
    "warn",
    {
      ignoredTypeNames: ["RegExp", "URL", "URLSearchParams"],
    }
  ],

  /**
   * Requires Promise-like values to be handled appropriately
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-floating-promises.md
   */
  "@typescript-eslint/no-floating-promises": [
    "error",
    {
      ignoreIIFE: true,
    }
  ],

  /**
   * Disallow iterating over an array with a for-in loop
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-for-in-array.md
   */
  "@typescript-eslint/no-for-in-array": "error",

  /**
   * Disallow the use of eval()-like method
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implied-eval.md
   */
  "@typescript-eslint/no-implied-eval": "error",

  /**
   * Avoid using promises in places not designed to handle them
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-promises.md
   */
  "@typescript-eslint/no-misused-promises": "error",

  /**
   * Disallow throwing literals as exceptions
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-throw-literal.md
   */
  "@typescript-eslint/no-throw-literal": "error",

  /**
   * It's unnecessary to compare boolean variables against boolean literals.  Just use the boolean variable directly (e.g. "if (x)" instead of "if (x === true)")
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-boolean-literal-compare.md
   */
  "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",

  /**
   * Disallows unnecessary type assertions
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-assertion.md
   */
  "@typescript-eslint/no-unnecessary-type-assertion": "error",

  /**
   * Warn about assigning an "any" value to a typed variable
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-assignment.md
   */
  "@typescript-eslint/no-unsafe-assignment": "warn",

  /**
   * Warn about calling an `any` value as a function
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-call.md
   */
  "@typescript-eslint/no-unsafe-call": "warn",

  /**
   * Warn about accessing members of an "any" variable
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-member-access.md
   */
  "@typescript-eslint/no-unsafe-member-access": "warn",

  /**
   * Warn about returning `any` from a function
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-return.md
   */
  "@typescript-eslint/no-unsafe-return": "warn",

  /**
   * TODO: Enable this rule once nullish coalescing is supported by all LTS versions of Node
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-nullish-coalescing.md
   */
  "@typescript-eslint/prefer-nullish-coalescing": "off",

  /**
   * Prefer using type parameter when calling Array#reduce instead of casting
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-reduce-type-parameter.md
   */
  "@typescript-eslint/prefer-reduce-type-parameter": "error",

  /**
   * Prefer `RegExp.exec()` over `String.match()`
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-regexp-exec.md
   */
  "@typescript-eslint/prefer-regexp-exec": "error",

  /**
   * Prefer `String.startsWith()` and `String.endsWith()` instead of older alternatives, such as `String.indexOf()`, `String.charAt()`, and `String.slice()`
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-string-starts-ends-with.md
   */
  "@typescript-eslint/prefer-string-starts-ends-with": "warn",

  /**
   * Warn about calling `Array.sort()` without a compare function.  The default compare algorithm sorts alphabetically, even for numbers, dates, etc.
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-array-sort-compare.md
   */
  "@typescript-eslint/require-array-sort-compare": [
    "warn",
    {
      ignoreStringArrays: true,
    }
  ],

  /**
   * Require async functions to contain an `await` keyword
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-await.md
   */
  "@typescript-eslint/require-await": "error",

  /**
   * Disallow unnecessary `return await` statements
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/return-await.md
   */
  "@typescript-eslint/return-await": "error",

  /**
   * Don"t allow the "use strict" pragma
   *
   * @see https://eslint.org/docs/rules/strict
   */
  strict: [
    "error",
    "never",
  ],
};
