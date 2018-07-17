/**
 * COMMON WEBPACK CONFIG
 */

// Global import
const DotenvPlugin = require('dotenv-webpack');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const { resolve } = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const { IgnorePlugin } = require('webpack');

// Local import
const { packageJson, srcDir } = require('./config/path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        include: srcDir,
        use: 'source-map-loader',
        enforce: 'pre'
      },
      // {
      //   test: /\.html$/,
      //   loader: 'html-loader'
      // },
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
    alias: {
      '@components': resolve(srcDir, 'components'),
      '@containers': resolve(srcDir, 'containers'),
      '@hoc': resolve(srcDir, 'hoc'),
      '@utils': resolve(srcDir, 'utils')
    },
    plugins: [new ModuleScopePlugin(srcDir, [packageJson])]
  },
  plugins: [
    new DotenvPlugin({ systemvars: true }),
    new IgnorePlugin(/^\.\/locale$/, /moment$/),
    new StyleLintPlugin()
  ]
};
