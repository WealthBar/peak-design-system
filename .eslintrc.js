// http://eslint.org/docs/user-guide/configuring

module.exports = {
  parserOptions : {
    parser: "babel-eslint",
    sourceType: "module",
  },
  extends: [
    'airbnb-base',
    'plugin:vue/recommended',
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    "import/no-extraneous-dependencies": ["error", {
      "devDependencies": true, "optionalDependencies": true, "peerDependencies": true
    }],
    'max-len': [2, 150, 2, {
      'ignoreUrls': true,
      'ignoreComments': false,
      "ignoreTemplateLiterals": true,
      "ignoreStrings": true,
    }],
    "import/no-duplicates": 0,
    "import/no-named-as-default": 0,
    "no-param-reassign": ["error", { "props": false }],
    "object-curly-newline": ["error", {"ObjectPattern": { "multiline": true }}],
    "consistent-return": 0,
    "no-plusplus": 0,
    "no-shadow": 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // allow console during development
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    // functions are hoisted, so it's safe to call a function in code that precedes the function's declaration
    'no-use-before-define': ['error', { 'functions': false }],
    'prefer-destructuring': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/max-attributes-per-line': 0,
    'vue/html-self-closing': ['error', {
      html: {
        normal: 'any',
      },
    }],
    'guard-for-in': 0,
    'no-restricted-syntax': 0,
    'arrow-parens': 0,
  }
}
