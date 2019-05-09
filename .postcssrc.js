// https://github.com/michael-ciniawsky/postcss-load-config

const autoprefixer = require('autoprefixer');

module.exports = {
  "plugins": [autoprefixer({ grid: true })],
};
