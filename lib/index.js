"use strict";

const universalRules = require("./universal-rules");
const javascriptRules = require("./javascript-rules");
const javascriptTestRules = require("./javascript-test-rules");
const typescriptRules = require("./typescript-rules");
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
      ],
      env: {
        es2020: true,
        "shared-node-browser": true,
      },
      rules: {
        ...universalRules,
        ...typescriptRules,
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
      env: {
        es2020: true,
        commonjs: true,
        "shared-node-browser": true,
      },
      rules: {
        ...universalRules,
        ...javascriptRules,
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
