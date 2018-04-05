// Global import
const { resolve } = require('path');
const { smart } = require('webpack-merge');

// Local import
const commonConfig = require('./webpack.config.common');

module.exports = (env, options) => {
  const { mode, add } = options;
  const modeConfig = require(`./config/${mode}`);

  let additionalConfig = {};
  if (add) additionalConfig = require(resolve(process.cwd(), add));

  switch (env) {
    case 'development': {
      const devConfig = require('./webpack.config.dev');
      return smart(commonConfig, modeConfig, devConfig, additionalConfig);
    }
    case 'production': {
      const prodConfig = require('./webpack.config.prod');
      return smart(commonConfig, modeConfig, prodConfig, additionalConfig);
    }
    case 'test':
    default:
      // TODO: config for test
      return {};
  }
};
