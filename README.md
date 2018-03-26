# eslint-config-mad-it

An opinionated list of ESLint rules used by Mad-IT

## Installation

```sh
npm install --save-dev eslint eslint-plugin-import eslint-config-mad-it
```

Then add the extends to your `.eslintrc`:

```javascript
{
  "extends": "mad-it",
  "rules": {
    // your overrides
  }
}
```

## React configuration

For supporting React projects, also add the mad-it/rules/react extension:

```javascript
{
  "extends": [
    "mad-it",
    "mad-it/rules/react"
  ]
}
```

Then install [`eslint-plugin-react`](https://github.com/yannickcr/eslint-plugin-react):

```sh
npm install --save-dev eslint-plugin-react
```


## LICENSE

MIT
