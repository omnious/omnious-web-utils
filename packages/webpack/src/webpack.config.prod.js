/**
 * PROD WEBPACK CONFIG
 */

// Global import
const CompressionPlugin = require('compression-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { resolve } = require('path');
const { LoaderOptionsPlugin } = require('webpack');

// Local import
const { CDN_URL, FACEBOOK_ID, GOOGLE_ID, tag } = require('./utils/env');
const { distDir, indexHtml, polyfills, srcDir, staticDir, vendor } = require('./utils/path');

module.exports = {
  mode: 'production',
  entry: {
    bundle: srcDir,
    vendor,
    polyfills
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
        use: [
          MiniCssExtractPlugin.loader,
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
    hints: 'warning'
  },
  devtool: 'source-map',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            comparisons: false,
            drop_console: true,
            drop_debugger: true,
            unused: true,
            warnings: false
          },
          mangle: true,
          output: {
            comments: false
          }
        },
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin()
    ],
    noEmitOnErrors: true,
    splitChunks: {
      chunks: 'all'
    },
    runtimeChunk: true
  },
  plugins: [
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|html)$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new CopyWebpackPlugin([{ from: staticDir, to: '..' }]),
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: indexHtml,
      templateParameters: { CDN_URL, FACEBOOK_ID, GOOGLE_ID },
      inject: true,
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
      },
      chunksSortMode: 'none'
    }),
    new LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css',
      chunkFilename: '[name].[contenthash:8].chunk.css'
    }),
    new SWPrecacheWebpackPlugin({
      cacheId: 'cached-app',
      minify: true
      // staticFileGlobs: [
      //   'src/**/**.*',
      //   'src/**.html'
      // ]
    })
  ]
};
