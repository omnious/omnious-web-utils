/**
 * DEV WEBPACK CONFIG
 */

// Global import
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

// Local import
const { host, port } = require('./config');
const { careersHtml, distDir, indexHtml, srcDir } = require('./config/paths');


module.exports = {
  devtool: 'eval-source-map',
  entry: [
    `webpack-dev-server/client?http://${host}:${port}`,
    'webpack/hot/only-dev-server',
    srcDir
  ],
  output: {
    path: distDir,
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
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
      filename: './index.html',
      template: indexHtml
    }),
    new HtmlWebpackPlugin({
      inject: true,
      filename: './careers.html',
      template: careersHtml
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  performance: {
    hints: false
  }
};
