// Global import
// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

// Local import
const { srcDir } = require('./path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: srcDir,
        use: {
          loader: 'ts-loader',
          // options: {
          //   transpileOnly: true
          // }
        }
      }
    ]
  },
  // plugins: [
  //   new ForkTsCheckerWebpackPlugin({
  //     tslint: true,
  //     watch: srcDir
  //   })
  // ]
};
