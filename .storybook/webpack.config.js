const { resolve } = require('path');

const { SRC, STORYBOOK } = require('../config/paths');


module.exports = {
  resolve: {
    extensions: ['.css', '.js', '.json', '.jsx', '.ts', '.tsx'],
    alias: {
      Constants: resolve(SRC, 'constants')
    }
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader',
      include: STORYBOOK
    }, {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }]
  }
}
