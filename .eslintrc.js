// http://eslint.org/docs/user-guide/configuring

module.exports = {
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaVersion: 2020
  },

  extends: [
    'airbnb-base',
    'plugin:vue/strongly-recommended',
    'plugin:vue/essential'
  ],

  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },

  // add your custom rules here
  rules: {
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        vue: 'never'
      }
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: true,
        peerDependencies: true
      }
    ],
    'quotes': ['error', 'single'],
    'max-len': [ 0 ],
    'import/no-duplicates': 0,
    'import/no-named-as-default': 0,
    'no-param-reassign': ['error', { props: false }],
    'object-curly-newline': ['error', { ObjectPattern: { multiline: true } }],
    'consistent-return': 0,
    'no-plusplus': 0,
    'no-shadow': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-use-before-define': [
      'error',
      {
        functions: false
      }
    ],
    'prefer-destructuring': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/max-attributes-per-line': 0,
    'vue/html-self-closing': [
      'error',
      {
        html: {
          normal: 'never',
          void: 'always'
        }
      }
    ],
    'vue/max-len': [
      'error',
      {
        'code': 150,
        'template': 500,
        'tabWidth': 2,
        'comments': 80,
        'ignorePattern': '',
        'ignoreComments': true,
        'ignoreTrailingComments': false,
        'ignoreUrls': true,
        'ignoreStrings': true,
        'ignoreTemplateLiterals': true,
        'ignoreRegExpLiterals': true,
        'ignoreHTMLAttributeValues': true,
        'ignoreHTMLTextContents': true,
      }
    ],
    'guard-for-in': 0,
    'no-restricted-syntax': 0,
    'arrow-parens': 0
  },

  root: true,

  env: {
    node: true
  },
};
