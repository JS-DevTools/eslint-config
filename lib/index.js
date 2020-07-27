"use strict";

const universalRules = require("./universal-rules");
const universalJSDocRules = require("./universal-jsdoc-rules");
const javascriptRules = require("./javascript-rules");
const javascriptJSDocRules = require("./javascript-jsdoc-rules");
const javascriptTestRules = require("./javascript-test-rules");
const typescriptRules = require("./typescript-rules");
const typescriptJSDocRules = require("./typescript-jsdoc-rules");
const typescriptTestRules = require("./typescript-test-rules");
const typescriptTypeRules = require("./typescript-type-rules");
const fs = require("fs");

// Determine whether the project has a tsconfig.json file
const hasTSConfig = fs.existsSync("tsconfig.json");

module.exports = {
  overrides: [
    /**
     * TypeScript source files
     *
     * Includes ESLint rules that require TypeScript type definitions.
     * This only works for TypeScript files that are included in the tsconfig.json file
     */
    {
      files: ["**/*.{ts,tsx}"],
      excludedFiles: "test/**",
      parser: "@typescript-eslint/parser",
      parserOptions: {
        sourceType: "module",
        ecmaVersion: 2020,
        ecmaFeatures: {
          impliedStrict: true,
          jsx: true,
        },
        tsconfigRootDir: hasTSConfig ? process.cwd() : undefined,
        project: hasTSConfig ? "tsconfig.json" : undefined,
      },
      plugins: [
        "@typescript-eslint",
        "jsdoc",
      ],
      env: {
        es2020: true,
        "shared-node-browser": true,
      },
      rules: {
        ...universalRules,
        ...universalJSDocRules,
        ...typescriptRules,
        ...typescriptJSDocRules,
        ...hasTSConfig && typescriptTypeRules,
      }
    },

    /**
     * TypeScript test files
     *
     * Does not include ESLint rules that require TypeScript type definitions,
     * since test files aren't included in the tsconfig.json file
     */
    {
      files: ["test/**/*.{ts,tsx}"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        sourceType: "module",
        ecmaVersion: 2020,
        ecmaFeatures: {
          impliedStrict: true,
          jsx: true,
        },
      },
      plugins: [
        "@typescript-eslint"
      ],
      env: {
        es2020: true,
        "shared-node-browser": true,
        mocha: true,
        jasmine: true,
      },
      rules: {
        ...universalRules,
        ...typescriptRules,
        ...typescriptTestRules,
      }
    },

    /**
     * JavaScript source files
     */
    {
      files: ["**/*.{js,jsx}"],
      excludedFiles: "test/**",
      parserOptions: {
        sourceType: "script",
        ecmaVersion: 2020,
        ecmaFeatures: {
          jsx: true,
        },
      },
      plugins: [
        "jsdoc",
      ],
      env: {
        es2020: true,
        commonjs: true,
        "shared-node-browser": true,
      },
      rules: {
        ...universalRules,
        ...universalJSDocRules,
        ...javascriptRules,
        ...javascriptJSDocRules,
      }
    },

    /**
     * JavaScript test files
     */
    {
      files: ["test/**/*.{js,jsx}"],
      parserOptions: {
        sourceType: "script",
        ecmaVersion: 2020,
      },
      ecmaFeatures: {
        jsx: true,
      },
      env: {
        es2020: true,
        commonjs: true,
        "shared-node-browser": true,
        mocha: true,
        jasmine: true,
      },
      rules: {
        ...universalRules,
        ...javascriptRules,
        ...javascriptTestRules,
      }
    },
  ],
};
