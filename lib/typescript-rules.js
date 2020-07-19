"use strict";

/**
 * These are basic TypeScript rules that DON'T require type information.
 */
module.exports = {
  /**
   * Use bracket syntax for simple arrays, and generic syntax for complex arrays.
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/array-type.md
   */
  "@typescript-eslint/array-type": [
    "error",
    {
      default: "array-simple",
      readonly: "array-simple",
    }
  ],

  /**
   * Allow certain @ts directives, but require a comment
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-ts-comment.md
   */
  "@typescript-eslint/ban-ts-comment": [
    "error",
    {
      "ts-expect-error": "allow-with-description",
      "ts-nocheck": "allow-with-description",
      "ts-ignore": true,  // never allow
      "ts-check": false,  // always allow
      minimumDescriptionLength: 10,
    }
  ],

  /**
   * Remove old TSLint comments from code
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-tslint-comment.md
   */
  "@typescript-eslint/ban-tslint-comment": "error",

  /**
   * Ban specific types from being used
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md
   */
  "@typescript-eslint/ban-types": [
    "error",
    {
      extendDefaults: false,
      types: {
        String: {
          message: "Use string instead",
          fixWith: "string",
        },
        Boolean: {
          message: "Use boolean instead",
          fixWith: "boolean",
        },
        Number: {
          message: "Use number instead",
          fixWith: "number",
        },
        Symbol: {
          message: "Use symbol instead",
          fixWith: "symbol",
        },
        Object: {
          message: "Use object instead",
          fixWith: "object",
        },
        "{}": {
          message: "Use object instead",
          fixWith: "object",
        },
      }
    }
  ],

  /**
   * Enforce one true brace style
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/brace-style.md
   */
  "@typescript-eslint/brace-style": [
    "error",
    "stroustrup",
    {
      // allow opening and closing brace to be on the same line
      allowSingleLine: true,
    },
  ],

  /**
   * Enforce spacing after comma (but not before)
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-spacing.md
   */
  "@typescript-eslint/comma-spacing": [
    "warn",
    {
      before: false,
      after: true,
    },
  ],

  /**
   * Enforce consistent syntax for type assertions (`foo as Bar` rather than `<Bar>foo`)
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-assertions.md
   */
  "@typescript-eslint/consistent-type-assertions": "error",

  /**
   * Prefer interfaces over type definitions
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-definitions.md
   */
  "@typescript-eslint/consistent-type-definitions": [
    "error",
    "interface"
  ],

  /**
   * Require default parameters to be the last parameters in the function
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/default-param-last.md
   */
  "@typescript-eslint/default-param-last": "error",

  /**
   * Require explicit accessibility modifiers on class members
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md
   */
  "@typescript-eslint/explicit-member-accessibility": "error",

  /**
   * Disallow spaces after the function name in function calls
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/func-call-spacing.md
   */
  "@typescript-eslint/func-call-spacing": "error",

  /**
   * Use 2-space indentation
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
   */
  "@typescript-eslint/indent": [
    "error",
    2,                        // 2 spaces
    {
      SwitchCase: 1,          // indent multipler for "switch" "case" statements
      VariableDeclarator: {
        var: 2,               // indent multiplier for multi-line "var" statements
        let: 2,               // indent multiplier for multi-line "let" statements
        const: 3,             // indent multiplier for multi-line "const" statements
      },
    },
  ],

  /**
   * Require a space before and after keywords
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/keyword-spacing.md
   */
  "@typescript-eslint/keyword-spacing": "error",

  /**
   * Require a blank line between class members
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/lines-between-class-members.md
   */
  "@typescript-eslint/lines-between-class-members": [
    "error",
    "always",
    {
      exceptAfterSingleLine: true,
    }
  ],

  /**
   * Require semicolon delimiters between interface members
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md
   */
  "@typescript-eslint/member-delimiter-style": "error",

  /**
   * Use method shorthand syntax, rather than function property syntax
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/method-signature-style.md
   */
  "@typescript-eslint/method-signature-style": [
    "error",
    "method"
  ],

  /**
   * Enforce typical TypeScript naming conventions
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
   */
  "@typescript-eslint/naming-convention": [
    "error",
    {
      selector: "default",
      filter: {
        regex: "\\W",            // Ignore quoted properties (ones that contain non-word characters)
        match: false
      },
      format: ["camelCase"],
      leadingUnderscore: "allow",
    },

    {
      selector: "variable",
      format: ["camelCase", "UPPER_CASE"],
      leadingUnderscore: "allow",
    },

    {
      selector: "typeParameter",
      format: ["PascalCase"],
      prefix: ["T"],            // Require generics to start with a T (e.g. T, TFoo, TBar)
    },

    {
      selector: "enumMember",
      format: ["PascalCase"],
    },

    {
      selector: "interface",
      format: ["PascalCase"],
      custom: {
        regex: "^I[A-Z]",       // Interfaces should NOT begin with "I"
        match: false
      }
    },

    {
      selector: "typeLike",
      format: ["PascalCase"],
    }
  ],

  /**
   * Disallow use of the Array constructor
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md
   */
  "@typescript-eslint/no-array-constructor": "error",

  /**
   * Don't allo non-null assertions that may be confused with inequality operators
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-confusing-non-null-assertion.md
   */
  "@typescript-eslint/no-confusing-non-null-assertion": "error",

  /**
   * Disallow duplicate name in class members
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dupe-class-members.md
   */
  "@typescript-eslint/no-dupe-class-members": "error",

  /**
   * Deleting dynamically computed keys can be dangerous and in some cases not well optimized.
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dynamic-delete.md
   */
  "@typescript-eslint/no-dynamic-delete": "error",

  /**
   * Warn about empty functions
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md
   */
  "@typescript-eslint/no-empty-function": "warn",

  /**
   * Don't allow empty interfaces
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-interface.md
   */
  "@typescript-eslint/no-empty-interface": [
    "error",
    {
      allowSingleExtends: true,   // Allow empty interfaces that extend another interface. This is preferred instead of a type alias.
    }
  ],

  /**
   * Warn about using the "any" type
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md
   */
  "@typescript-eslint/no-explicit-any": "warn",

  /**
   * Don't allow redundant non-null assertion operators
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-non-null-assertion.md
   */
  "@typescript-eslint/no-extra-non-null-assertion": "error",

  /**
   * Disallow unnecessary semicolons
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-semi.md
   */
  "@typescript-eslint/no-extra-semi": "error",

  /**
   * Don't allow classes that only contain constructors and/or static members
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extraneous-class.md
   */
  "@typescript-eslint/no-extraneous-class": [
    "error",
    {
      allowWithDecorator: true,   // Allow classes that are needed for frameworks
    }
  ],

  /**
   * Disallow explicit type declarations when variables are initialized
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-inferrable-types.md
   */
  "@typescript-eslint/no-inferrable-types": "error",

  /**
   * Don't allow the `this` keyword to be used in functions that don't have a `this` parameter defined
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-this.md
   */
  "@typescript-eslint/no-invalid-this": "error",

  /**
   * Enforce valid definition of `new` and `constructor`
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-new.md
   */
  "@typescript-eslint/no-misused-new": "error",

  /**
   * Disallow TypeScript namespaces in code.  Only allow for type declarations.
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-namespace.md
   */
  "@typescript-eslint/no-namespace": [
    "error",
    {
      allowDeclarations: true,
      allowDefinitionFiles: true,
    }
  ],

  /**
   * Disallows using a non-null assertion after an optional chain expression
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-asserted-optional-chain.md
   */
  "@typescript-eslint/no-non-null-asserted-optional-chain": "error",

  /**
   * Don't allow parameter properties
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-parameter-properties.md
   */
  "@typescript-eslint/no-parameter-properties": "error",

  /**
   * Don't allow `require()`.  Use `import` syntax instead.
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-require-imports.md
   */
  "@typescript-eslint/no-require-imports": "error",

  /**
   * Disallow usage of expressions in statement position
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-expressions.md
   */
  "@typescript-eslint/no-unused-expressions": [
    "error",
    {
      allowShortCircuit: true,   // allow short-circuited expressions (e.g. foo && bar())
      allowTernary: true,        // allow ternary expressions (e.g. foo ? bar() : baz())
    },
  ],

  /**
   * Disallow declaration of variables that are not used in the code
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
   */
  "@typescript-eslint/no-unused-vars": [
    "error",
    {
      vars: "all",                // check "all" variables (as opposed to just "local" variables)
      args: "after-used",         // check any arguments that come "after-used" arguments
      ignoreRestSiblings: true,   // ignore siblings of ...rest params
      argsIgnorePattern: "^_",    // Ignore variables and params that begin with an underscore
    },
  ],

  /**
   * Disallow declaration of variables that are not used in the code
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars-experimental.md
   */
  "@typescript-eslint/no-unused-vars-experimental": [
    "error",
    {
      ignoreArgsIfArgsAfterAreUsed: true,
    }
  ],

  /**
   * Don't allow constructors that are empty or only call super()
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md
   */
  "@typescript-eslint/no-useless-constructor": "error",

  /**
   * Disallows the use of require statements except in import statements (`import foo = require("foo")`)
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-var-requires.md
   */
  "@typescript-eslint/no-var-requires": "error",

  /**
   * Prefer usage of as const over literal type
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-as-const.md
   */
  "@typescript-eslint/prefer-as-const": "error",

  /**
   * Use function types instead of interfaces with call signatures
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-function-type.md
   */
  "@typescript-eslint/prefer-function-type": "error",

  /**
   * Require that all enum members be literal values
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-literal-enum-member.md
   */
  "@typescript-eslint/prefer-literal-enum-member": "error",

  /**
   * Require the use of the namespace keyword instead of the module keyword to declare custom TypeScript modules
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-namespace-keyword.md
   */
  "@typescript-eslint/prefer-namespace-keyword": "error",

  /**
   * TODO: Enable this rule once optional chaining is supported by all LTS versions of Node
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-optional-chain.md
   */
  "@typescript-eslint/prefer-optional-chain": "off",

  /**
   * Always use @ts-expect-error instead of @ts-ignore
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-ts-expect-error.md
   */
  "@typescript-eslint/prefer-ts-expect-error": "error",

  /**
   * Require double quotes for all strings
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/quotes.md
   */
  "@typescript-eslint/quotes": [
    "error",
    "double",
    "avoid-escape",
  ],

  /**
   * Require use of semicolons instead of ASI
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/semi.md
   */
  "@typescript-eslint/semi": "error",

  /**
   * Disallow a space between the function name and left paren
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-before-function-paren.md
   */
  "@typescript-eslint/space-before-function-paren": [
    "error",
    "never",
  ],

  /**
   * Use `import` rather than triple slash directives
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/triple-slash-reference.md
   */
  "@typescript-eslint/triple-slash-reference": "error",

  /**
   * Require consistent spacing around type annotations
   *
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/type-annotation-spacing.md
   */
  "@typescript-eslint/type-annotation-spacing": "error",

  /**
   * Don't allow the "use strict" pragma
   *
   * @see https://eslint.org/docs/rules/strict
   */
  strict: [
    "error",
    "never",
  ],
};
