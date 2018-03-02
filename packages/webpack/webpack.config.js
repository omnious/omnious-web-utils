// Global import
const HappyPack = require('happypack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { smart } = require('webpack-merge');

// Local import
const commonConfig = require('./webpack.config.common');
const devConfig = require('./webpack.config.dev');
const prodConfig = require('./webpack.config.prod');
const { srcDir } = require('./config/paths');


function mainLoader(language) {
  switch (language) {
    case 'ts':
      return {
        module: {
          rules: [{
            test: /\.tsx?$/,
            use: {
              loader: 'happypack/loader',
              options: {
                id: 'happypack-typescript'
              }
            },
            include: srcDir
          }]
        },
        plugins: [
          new HappyPack({
            id: 'happypack-typescript',
            verbose: false,
            threads: 5,
            loaders: [
              {
                loader: 'ts-loader',
                options: {
                  happyPackMode: true
                }
              }
            ]
          })
        ]
      };
    case 'js':
    default:
      return {
        module: {
          rules: [{
            test: /\.jsx?$/,
            use: {
              loader: 'happypack/loader',
              options: {
                id: 'happypack-javascript'
              }
            },
            include: srcDir
          }]
        },
        plugins: [
          new HappyPack({
            id: 'happypack-javascript',
            verbose: false,
            threads: 5,
            loaders: [
              {
                loader: 'babel-loader',
                options: {
                  cacheDirectory: true
                }
              }
            ]
          })
        ]
      };
  }
}

module.exports = (env, language) => {
  switch (env) {
    case 'development':
      return smart(commonConfig, devConfig, mainLoader(language));
    case 'production':
      return smart(commonConfig, prodConfig, mainLoader(language));
    case 'test':
    default:
      // TODO: config for test
      return {};
  }
};
