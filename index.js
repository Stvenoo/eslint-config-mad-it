module.exports = {
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  env: {
    browser: true,
    node: true,
  },
  extends: [
    './rules/possible-errors.js',
    './rules/best-practices.js',
    './rules/strict.js',
    './rules/variables.js',
    './rules/node.js',
    './rules/stylistic.js',
    './rules/es6.js',
    './rules/imports.js',
  ].map(require.resolve),
};
