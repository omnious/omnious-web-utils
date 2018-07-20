const { srcDir } = require('./path');

module.exports.reactJS = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: srcDir,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
};

module.exports.reactTS = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: srcDir,
        exclude: /node_modules/,
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
