const { resolve } = require('path');

const { SRC, STORYBOOK } = require('../../../config/paths');


module.exports = {
  resolve: {
    extensions: ['.css', '.js', '.json', '.ts', '.tsx'],
    alias: {}
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader',
      include: STORYBOOK
    }, {
      test: /\.tsx?$/,
      use: 'ts-loader',
      include: SRC
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }]
  }
}
