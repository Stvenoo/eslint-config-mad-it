module.exports = {
  env: {
    node: true,
  },
  rules: {
    // require return statements after callbacks (cb names need to hardcoded for this rule to work)
    'callback-return': 'off',

    // require require() calls to be placed at top-level module scope
    'global-require': 'error',

    // require error handling in callbacks (err names need to hardcoded for this rule to work)
    'handle-callback-err': 'off',

    // disallow require calls to be mixed with regular variable declarations
    'no-mixed-requires': 'off',

    // disallow new operators with calls to require
    'no-new-require': 'error',

    // disallow string concatenation with __dirname and __filename
    'no-path-concat': 'error',

    // disallow the use of process.env
    'no-process-env': 'off',

    // disallow the use of process.exit()
    'no-process-exit': 'off',

    // disallow specified modules when loaded by require
    'no-restricted-modules': 'off',

    // disallow synchronous methods
    'no-sync': 'error',
  },
};
