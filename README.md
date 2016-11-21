# eslint-config-dlw [![Build status](https://img.shields.io/travis/Stvenoo/eslint-config-dlw.svg)](https://travis-ci.org/Stvenoo/eslint-config-dlw) [![Codecov](https://img.shields.io/codecov/c/github/Stvenoo/eslint-config-dlw.svg)](https://codecov.io/gh/Stvenoo/eslint-config-dlw) [![GitHub release](https://img.shields.io/github/release/Stvenoo/eslint-config-dlw.svg)](https://github.com/Stvenoo/eslint-config-dlw/releases)

An opinionated list of ESLint rules used at Delaware Consulting.

## Installation

```sh
npm install --save-dev eslint eslint-plugin-import eslint-config-dlw
```

Then add the extends to your `.eslintrc`:

```javascript
{
  "extends": "dlw",
  "rules": {
    // your overrides
  }
}
```

## React configuration

For supporting React projects, also add the dlw/rules/react extension:

```javascript
{
  "extends": [
    "dlw",
    "dlw/rules/react"
  ]
}
```

Then install [`eslint-plugin-react`](https://github.com/yannickcr/eslint-plugin-react):

```sh
npm install --save-dev eslint-plugin-react
```


## LICENSE

MIT
