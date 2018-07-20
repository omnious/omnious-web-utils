/**
 * DEV WEBPACK CONFIG
 */

// Global import
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');

// Local import
const { CDN_URL, FACEBOOK_ID, GOOGLE_ID, host, port } = require('./utils/env');
const { distDir, indexHtml, srcDir } = require('./utils/path');

module.exports = {
  mode: 'development',
  entry: [
    `webpack-dev-server/client?http://${host}:${port}`,
    'webpack/hot/only-dev-server',
    srcDir
  ],
  output: {
    path: distDir,
    filename: '[name].js',
    publicPath: '/',
    chunkFilename: '[name].chunk.js'
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      }
    ]
  },
  performance: {
    hints: false
  },
  devtool: 'inline-source-map',
  plugins: [
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: indexHtml,
      templateParameters: { CDN_URL, FACEBOOK_ID, GOOGLE_ID },
      inject: true,
      chunksSortMode: 'none'
    })
  ]
};
