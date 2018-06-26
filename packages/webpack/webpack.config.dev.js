/**
 * DEV WEBPACK CONFIG
 */

// Global import
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');

// Local import
const { CDN_URL, FACEBOOK_ID, GOOGLE_ID, host, port } = require('./config/env');
const { distDir, indexHtml, polyfills, srcDir } = require('./config/path');

module.exports = {
  mode: 'development',
  entry: [
    `webpack-dev-server/client?http://${host}:${port}`,
    'webpack/hot/only-dev-server',
    polyfills,
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
  devtool: 'eval-source-map',
  // TODO: Add optimization options
  // optimization: {},
  plugins: [
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: indexHtml,
      templateParameters: { CDN_URL, FACEBOOK_ID, GOOGLE_ID },
      inject: true,
      chunksSortMode: 'none'
    })
    // NOTE: Already contained in `development` mode
    // new NamedModulesPlugin()
  ]
  // NOTE: Already contained in `development` mode
  // cache: true
};
