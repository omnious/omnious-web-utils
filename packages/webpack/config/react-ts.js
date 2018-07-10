// Global import
// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
          // options: {
          //   transpileOnly: true
          // }
        }
      }
    ]
  }
  // plugins: [
  //   new ForkTsCheckerWebpackPlugin({
  //     tslint: true,
  //     watch: srcDir
  //   })
  // ]
};
