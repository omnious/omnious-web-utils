const { srcDir } = require('./path');

module.exports = {
  module: {
    rules: [{
      test: /\.js$/,
      include: srcDir,
      use: [
        'source-map-loader',
        'eslint-loader'
      ],
      enforce: 'pre'
    }, {
      test: /\.jsx?$/,
      include: srcDir,
      use: 'babel-loader'
    }, {
      test: /\.tsx?$/,
      include: srcDir,
      use: {
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      }
    }]
  }
};
