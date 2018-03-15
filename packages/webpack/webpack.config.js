// Global import
const { resolve } = require('path');
const { smart } = require('webpack-merge');

// Local import
const commonConfig = require('./webpack.config.common');
const { srcDir } = require('./config/paths');

function mainLoader(language) {
  switch (language) {
    case 'ts':
      return {
        module: {
          rules: [
            {
              test: /\.tsx?$/,
              use: 'ts-loader',
              include: srcDir
            }
          ]
        }
      };
    case 'js':
    default:
      return {
        module: {
          rules: [
            {
              test: /\.jsx?$/,
              use: 'babel-loader',
              include: srcDir
            }
          ]
        }
      };
  }
}

module.exports = (env, options) => {
  const { language = 'js', add } = options;

  let additionalConfig = {};
  if (add) additionalConfig = require(resolve(process.cwd(), add));

  switch (env) {
    case 'development': {
      const devConfig = require('./webpack.config.dev');
      return smart(commonConfig, devConfig, mainLoader(language), additionalConfig);
    }
    case 'production': {
      const prodConfig = require('./webpack.config.prod');
      return smart(commonConfig, prodConfig, mainLoader(language), additionalConfig);
    }
    case 'test':
    default:
      // TODO: config for test
      return {};
  }
};
