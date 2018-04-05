/**
 * PROD WEBPACK CONFIG
 */

// Global import
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
// const OfflinePlugin = require('offline-plugin');
const { resolve } = require('path');
const { LoaderOptionsPlugin, optimize } = require('webpack');

// Local import
const { tag } = require('./config');
const { distDir, indexHtml, srcDir, staticDir } = require('./config/paths');

module.exports = {
  mode: 'production',
  entry: {
    bundle: srcDir,
    vendor: resolve(srcDir, 'vendor'),
    polyfills: resolve(srcDir, 'polyfills')
  },
  output: {
    path: resolve(distDir, tag),
    filename: '[name].[chunkhash:8].js',
    publicPath: `/${tag}/`,
    chunkFilename: '[name].[chunkhash:8].chunk.js'
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                minimize: true,
                sourceMap: true
              }
            },
            'postcss-loader'
          ]
        })
      }
    ]
  },
  performance: {
    hints: 'warning'
  },
  devtool: 'source-map',
  optimization: {
    // TODO: Add optimization options
  },
  plugins: [
    new CleanWebpackPlugin(distDir),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|html)$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new CopyWebpackPlugin([{ from: staticDir, to: '..' }]),
    new ExtractTextPlugin({ filename: '[name].[contenthash:8].css' }),
    new HtmlWebpackPlugin({
      inject: true,
      filename: '../index.html',
      template: indexHtml,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new StyleLintPlugin(),
    new SWPrecacheWebpackPlugin({
      cacheId: 'cached-app',
      minify: true
      // staticFileGlobs: [
      //   'src/**/**.*',
      //   'src/**.html'
      // ]
    }),
    new optimize.SplitChunksPlugin()
    // new OfflinePlugin({
    //   safeToUseOptionalCaches: true,
    //   caches: {
    //     main: ['../index.html', 'polyfills.*.*', 'vendor.*.*', 'bundle.*.*'],
    //     additional: ['*.chunk.js', ':externals:'],
    //     optional: [':rest:']
    //   },
    //   ServiceWorker: {
    //     output: '../sw.js',
    //     events: true
    //   },
    //   AppCache: false
    // }),
    // NOTE: already contained in `production` mode
    // new UglifyJsPlugin({
    //   compress: {
    //     drop_console: true,
    //     drop_debugger: true,
    //     warnings: false,
    //     unused: true
    //   },
    //   mangle: true,
    //   comments: false,
    //   sourceMap: true
    // }),
    // new optimize.ModuleConcatenationPlugin(),
    // new NoEmitOnErrorsPlugin()
  ]
};
