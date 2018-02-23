/**
 * DEV WEBPACK CONFIG
*/

// Global import
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { smart } = require('webpack-merge');

// Local import
const { host, port } = require('./config');
// const { SRC } = require('./config/paths');
const common = require('./webpack.config.common');


module.exports = smart(common, {
  devtool: 'eval-source-map',
  entry: [
    `webpack-dev-server/client?http://${host}:${port}`,
    'webpack/hot/only-dev-server',
    './src'
  ],
  output: {
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      filename: 'index.html',
      template: './src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  performance: {
    hints: false
  }
});
