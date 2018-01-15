const { SRC, STORYBOOK } = require('../config/paths');


module.exports = {
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx']
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
    }]
  }
}