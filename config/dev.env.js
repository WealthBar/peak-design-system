const { merge } = require('webpack-merge');
const prodEnv = require('./prod.env');

const demoMode = process.env.DEMO_MODE !== 'false';

module.exports = merge(prodEnv, {
  DEMO: demoMode,
  NODE_ENV: '"development"',
});
