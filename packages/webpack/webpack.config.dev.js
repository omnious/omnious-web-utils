/**
 * DEV WEBPACK CONFIG
 */

// Global import
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { HotModuleReplacementPlugin, NamedModulesPlugin, NoEmitOnErrorsPlugin } = require('webpack');

// Local import
const { host, port } = require('./config');
const { distDir, indexHtml, srcDir } = require('./config/paths');

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
  plugins: [
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      filename: './index.html',
      template: indexHtml
    }),
    new NamedModulesPlugin(),
    new NoEmitOnErrorsPlugin()
  ],
  performance: {
    hints: false
  }
};
