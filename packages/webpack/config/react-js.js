// Local import
const { srcDir } = require('./path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: srcDir,
        use: 'babel-loader'
      }
    ]
  }
};
