const { srcDir } = require('./path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: srcDir,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true
          }
        }
      }
    ]
  }
};
