/**
 * COMMON WEBPACK CONFIG
 */

// Global import
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const webpack = require('webpack');

// Local import
const { api, cdn, env, facebook, google, mailchimp, sentry } = require('./config');
const { packageJson, srcDir } = require('./config/paths');


module.exports = {
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {},
    plugins: [new ModuleScopePlugin(srcDir, [packageJson])]
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: 'source-map-loader',
      enforce: 'pre',
      include: srcDir
    }, {
      test: /\.(jpg|png)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[hash:8].[ext]'
        }
      }
    }, {
      test: /\.svg$/,
      use: 'file-loader'
    }]
  },
  plugins: [
    new InterpolateHtmlPlugin({ cdn, facebook, google }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env),
      'API': JSON.stringify(api),
      'CHIMP': JSON.stringify(mailchimp),
      'SENTRY': JSON.stringify(sentry)
    })
  ]
};
