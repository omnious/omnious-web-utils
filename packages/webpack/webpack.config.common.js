/**
 * COMMON WEBPACK CONFIG
 */

// Global import
const HappyPack = require('happypack');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');

// Local import
const { PACKAGE, SRC } = require('./config/paths');


module.exports = {
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {},
    plugins: [
      new ModuleScopePlugin(SRC, [PACKAGE])
    ]
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: {
        loader: 'happypack/loader',
        options: {
          id: 'happypack-typescript'
        }
      },
      include: SRC
    }]
  },
  plugins: [
    new HappyPack({
      id: 'happypack-typescript',
      verbose: false,
      threads: 5,
      loaders: [{
        loader: 'ts-loader',
        options: {
          happyPackMode: true
        }
      }]
    })
  ]
};
