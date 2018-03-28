/**
 * COMMON WEBPACK CONFIG
 */

// Global import
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const { DefinePlugin, IgnorePlugin } = require('webpack');

// Local import
const { api, cdn, env, facebook, google, mailchimp, sentry } = require('./config');
const { packageJson, srcDir } = require('./config/paths');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        include: srcDir,
        use: 'source-map-loader',
        enforce: 'pre'
      },
      {
        test: /\.jsx?$/,
        include: srcDir,
        use: 'babel-loader'
      },
      {
        test: /\.tsx?$/,
        include: srcDir,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true
          }
        }
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: '[name].[hash:8].[ext]'
          }
        }
      },
      {
        test: /\.(gif|svg|otf|ttf)$/,
        use: 'file-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {},
    plugins: [new ModuleScopePlugin(srcDir, [packageJson])]
  },
  plugins: [
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env),
      API: JSON.stringify(api),
      CDN: JSON.stringify(cdn),
      CHIMP: JSON.stringify(mailchimp),
      SENTRY: JSON.stringify(sentry)
    }),
    new ForkTsCheckerWebpackPlugin({
      watch: srcDir
    }),
    new IgnorePlugin(/^\.\/locale$/, /moment$/),
    new InterpolateHtmlPlugin({ cdn, facebook, google })
  ]
};
