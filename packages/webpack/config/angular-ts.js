// Global import
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { ContextReplacementPlugin } = require('webpack');

// Local import
const { srcDir } = require('./path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          },
          'angular2-template-loader'
        ]
      }
    ]
  },
  plugins: [
    new ContextReplacementPlugin(/\@angular(\\|\/)core(\\|\/)esm5/, srcDir),
    new ForkTsCheckerWebpackPlugin({
      tslint: true,
      watch: srcDir
    })
  ]
};
