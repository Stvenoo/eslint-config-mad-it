module.exports = {
  rules: {
    // enforce linebreaks after opening and before closing array brackets
    'array-bracket-newline': 'off',

    // enforce consistent spacing inside array brackets
    'array-bracket-spacing': ['error', 'never'],

    // enforce line breaks after each array element
    'array-element-newline': 'off',

    // enforce consistent spacing inside single-line blocks
    'block-spacing': ['error', 'always'],

    // enforce consistent brace style for blocks
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],

    // require camel case names
    camelcase: ['error', { properties: 'never' }],

    // require or disallow trailing commas
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],

    // enforce consistent spacing before and after commas
    'comma-spacing': ['error', { before: false, after: true }],

    // enforce consistent comma style
    'comma-style': ['error', 'last'],

    // enforce consistent spacing inside computed property brackets
    'computed-property-spacing': ['error', 'never'],

    // enforces consistent naming when capturing the current execution context
    'consistent-this': 'off',

    // enforce newline at the end of file, with no multiple empty lines
    'eol-last': ['error', 'always'],

    // require or disallow spacing between function identifiers and their invocations
    'func-call-spacing': ['error', 'never'],

    // require function names to match the name of the variable or property to which they are assigned
    'func-name-matching': 'off',

    // require or disallow named function expressions
    'func-names': ['error', 'as-needed'],

    // enforce the consistent use of either function declarations or expressions
    'func-style': 'off',

    // enforce consistent line breaks inside function parentheses
    'function-paren-newline': 'off',

    // Blacklist certain identifiers to prevent them being used
    'id-blacklist': 'off',

    // enforce minimum and maximum identifier lengths
    // (variable names, property names etc.)
    'id-length': 'off',

    // require identifiers to match a specified regular expression
    'id-match': 'off',

    'implicit-arrow-linebreak': ['error', 'beside'],

    // this option sets a specific tab width for your code
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 2,
        outerIIFEBody: 1,
        MemberExpression: 1,
        CallExpression: {
          arguments: 1,
        },
        FunctionDeclaration: {
          parameters: 1,
          body: 1,
        },
        FunctionExpression: {
          parameters: 1,
          body: 1,
        },
      },
    ],

    // specify whether double or single quotes should be used in JSX attributes
    'jsx-quotes': ['error', 'prefer-single'],

    // enforces spacing between keys and values in object literal properties
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],

    // require a space before & after certain keywords
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
        overrides: {
          return: { after: true },
          throw: { after: true },
          case: { after: true },
        },
      },
    ],

    // enforce position of line comments
    'line-comment-position': 'off',

    // disallow mixed 'LF' and 'CRLF' as linebreaks
    'linebreak-style': 'off',

    // enforces empty lines around comments
    'lines-around-comment': 'off',

    'lines-between-class-members': ['error', 'always'],

    // specify the maximum depth that blocks can be nested
    'max-depth': ['error', 20],

    // specify the maximum length of a line in your program
    'max-len': [
      'error',
      {
        code: 80,
        tabWidth: 2,
        comments: 125,
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],

    // specify the max number of lines in a file
    'max-lines': [
      'off',
      {
        max: 300,
        skipBlankLines: true,
        skipComments: true,
      },
    ],

    // enforce a maximum number of line of code in a function
    'max-lines-per-function': 'off',

    // specify the maximum depth callbacks can be nested
    'max-nested-callbacks': 'error',

    // limits the number of parameters that can be used in the function declaration.
    'max-params': ['off', 3],

    // specify the maximum number of statement allowed in a function
    'max-statements': ['off', 10],

    'multiline-comment-style': 'off',

    // restrict the number of statements per line
    // http://eslint.org/docs/rules/max-statements-per-line
    'max-statements-per-line': ['off', { max: 1 }],

    // require multiline ternary
    'multiline-ternary': ['off', 'never'],

    // require a capital letter for constructors
    'new-cap': [
      'error',
      {
        newIsCap: false,
        capIsNew: false,
      },
    ],

    // disallow the omission of parentheses when invoking a constructor with no arguments
    'new-parens': 'error',

    // enforces new line after each method call in the chain to make it
    // more readable and easy to maintain
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 3 }],

    // disallow use of the Array constructor
    'no-array-constructor': 'error',

    // disallow use of bitwise operators
    'no-bitwise': 'error',

    // disallow use of the continue statement
    'no-continue': 'error',

    // disallow comments inline after code
    'no-inline-comments': 'off',

    // disallow if as the only statement in an else block
    'no-lonely-if': 'error',

    // disallow un-paren'd mixes of different operators
    // http://eslint.org/docs/rules/no-mixed-operators
    'no-mixed-operators': [
      'error',
      {
        groups: [
          ['+', '-', '*', '/', '%', '**'],
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof'],
        ],
        allowSamePrecedence: false,
      },
    ],

    // disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': 'error',

    // disallow use of chained assignment expressions
    'no-multi-assign': 'error',

    // disallow multiple empty lines and only one newline at the end
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],

    // disallow negated conditions
    'no-negated-condition': 'off',

    // disallow nested ternary expressions
    'no-nested-ternary': 'error',

    // disallow use of the Object constructor
    'no-new-object': 'error',

    // disallow use of unary operators, ++ and --
    'no-plusplus': 'error',

    // disallow certain syntax forms
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],

    // disallow tab characters entirely
    'no-tabs': 'error',

    // disallow the use of ternary operators
    'no-ternary': 'off',

    // disallow trailing whitespace at the end of lines
    'no-trailing-spaces': 'error',

    // disallow dangling underscores in identifiers
    'no-underscore-dangle': ['error', { allowAfterThis: false }],

    // disallow the use of Boolean literals in conditional expressions
    // also, prefer `a || b` over `a ? a : b`
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],

    // disallow whitespace before properties
    'no-whitespace-before-property': 'error',

    // enforce the location of single-line statements
    'nonblock-statement-body-position': ['error', 'below'],

    // require padding inside curly braces
    'object-curly-spacing': ['error', 'always'],

    // enforce line breaks between braces
    // TODO: enable once https://github.com/eslint/eslint/issues/6488 is resolved
    'object-curly-newline': [
      'off',
      {
        ObjectExpression: { minProperties: 0, multiline: true },
        ObjectPattern: { minProperties: 0, multiline: true },
      },
    ],

    // enforce "same line" or "multiple line" on object properties.
    'object-property-newline': [
      'off',
      {
        allowMultiplePropertiesPerLine: true,
      },
    ],

    // allow just one var statement per function
    'one-var': ['error', { initialized: 'never' }],

    // require a newline around variable declaration
    'one-var-declaration-per-line': ['error', 'initializations'],

    // require assignment operator shorthand where possible or prohibit it entirely
    'operator-assignment': ['error', 'always'],

    // enforce operators to be placed before or after line breaks
    'operator-linebreak': 'off',

    // enforce padding within blocks
    'padded-blocks': ['error', 'never'],

    // require or disallow padding lines between statements
    'padding-line-between-statements': 'off',

    // disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead.
    'prefer-object-spread': 'error',

    // require quotes around object literal property names
    'quote-props': [
      'error',
      'as-needed',
      { keywords: false, unnecessary: true, numbers: false },
    ],

    // specify whether double or single quotes should be used
    quotes: ['error', 'single', { avoidEscape: true }],

    // do not require jsdoc
    // http://eslint.org/docs/rules/require-jsdoc
    'require-jsdoc': 'off',

    // require or disallow use of semicolons instead of ASI
    semi: ['error', 'always'],

    // enforce spacing before and after semicolons
    'semi-spacing': ['error', { before: false, after: true }],

    // enforce location of semicolons
    'semi-style': ['error', 'last'],

    // requires object keys to be sorted
    'sort-keys': ['off', 'asc', { caseSensitive: false, natural: true }],

    // sort variables within the same declaration block
    'sort-vars': 'off',

    // require or disallow space before blocks
    'space-before-blocks': 'error',

    // require or disallow space before function opening parenthesis
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],

    // require or disallow spaces inside parentheses
    'space-in-parens': ['error', 'never'],

    // require spaces around operators
    'space-infix-ops': 'error',

    // Require or disallow spaces before/after unary operators
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false,
        overrides: {},
      },
    ],

    // require or disallow a space immediately following the // or /* in a comment
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          exceptions: ['-', '+'],
          markers: ['=', '!'], // space here to support sprockets directives
        },
        block: {
          exceptions: ['-', '+'],
          markers: ['=', '!'], // space here to support sprockets directives
          balanced: false,
        },
      },
    ],

    // enforce spacing around colons of switch statements
    'switch-colon-spacing': ['error', { after: true, before: false }],

    // disallow spacing between template tags and their literals
    'template-tag-spacing': ['error', 'never'],

    // require or disallow the Unicode Byte Order Mark
    'unicode-bom': ['error', 'never'],

    // require regex literals to be wrapped in parentheses
    'wrap-regex': 'off',

    'capitalized-comments': 'off',
  },
};
