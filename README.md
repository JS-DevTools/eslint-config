ESLint Config
==============================================
### Opinionated JSDevTools ESLint config for JavaScript, TypeScript, and JSX

[![Cross-Platform Compatibility](https://jstools.dev/img/badges/os-badges.svg)](https://github.com/JS-DevTools/eslint-config/actions)
[![Build Status](https://github.com/JS-DevTools/eslint-config/workflows/CI-CD/badge.svg)](https://github.com/JS-DevTools/eslint-config/actions)

[![Coverage Status](https://coveralls.io/repos/github/JS-DevTools/eslint-config2/badge.svg?branch=master)](https://coveralls.io/github/JS-DevTools/eslint-config2)
[![Dependencies](https://david-dm.org/JS-DevTools/eslint-config.svg)](https://david-dm.org/JS-DevTools/eslint-config)

[![npm](https://img.shields.io/npm/v/@jsdevtools/eslint-config.svg)](https://www.npmjs.com/package/@jsdevtools/eslint-config)
[![License](https://img.shields.io/npm/l/@jsdevtools/eslint-config.svg)](LICENSE)
[![Buy us a tree](https://img.shields.io/badge/Treeware-%F0%9F%8C%B3-lightgreen)](https://plant.treeware.earth/JS-DevTools/eslint-config)


This is a [shareable config](https://eslint.org/docs/developer-guide/shareable-configs) for [ESLint](https://eslint.org/) that's used for [JSDevTools projects](https://jstools.dev).  It's highly opinionated and tailored to the types of projects we build, so it's probably not relevant to you.  But nonetheless, it could be a good starting point for creating your own custom shareable config.

This config uses [ESLint's `overrides` feature](https://eslint.org/docs/user-guide/configuring#configuration-based-on-glob-patterns) to apply different rulesets to different files based on glob patterns.  It currently includes rulesets for JavaScript, TypeScript, and JSX files, as well more relaxed rulesets for test files in any of those languages.



Related Projects
-----------------------
- [eslint-config-modular](https://jstools.dev/eslint-config-modular/)<br>
  Modular ESLint configuration

- [tslint-modular](https://jstools.dev/tslint-modular/)<br>
  Modular TSLint configuration for TypeScript projects



Installation
-----------------------
Run the following [npm](https://docs.npmjs.com/about-npm/) command to install [ESLint](https://eslint.org/) and our ESLint config as dev-dependencies of your project:

```bash
npm install eslint @jsdevtools/eslint-config --save-dev
```



Usage
-----------------------
Shareable configs are designed to work with the `extends` feature of `.eslintrc` files. You can learn more about
[Shareable Configs](https://eslint.org/docs/developer-guide/shareable-configs) on the official ESLint website.

To use our ESLint config in your project, create an `.eslintrc.yml` file with the following contents:

**.eslintrc.yml**
```yaml
root: true
extends: "@jsdevtools"

rules:
  # You can override any rules here
```



License
--------------------------
Our ESLint config is 100% free and open-source, under the [MIT license](LICENSE). Use it however you want.

This package is [Treeware](http://treeware.earth). If you use it in production, then we ask that you [**buy the world a tree**](https://plant.treeware.earth/JS-DevTools/eslint-config) to thank us for our work. By contributing to the Treeware forest you’ll be creating employment for local families and restoring wildlife habitats.



Big Thanks To
--------------------------
Thanks to these awesome companies for their support of Open Source developers ❤

[![Travis CI](https://jstools.dev/img/badges/travis-ci.svg)](https://travis-ci.com)
[![SauceLabs](https://jstools.dev/img/badges/sauce-labs.svg)](https://saucelabs.com)
[![Coveralls](https://jstools.dev/img/badges/coveralls.svg)](https://coveralls.io)
