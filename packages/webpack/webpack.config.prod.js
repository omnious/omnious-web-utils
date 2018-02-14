/**
 * PROD WEBPACK CONFIG
 */

module.exports = smart(common, {
  devtool: 'source-map',
  entry: {},
  output: {},
  module: {
    rules: []
  },
  plugins: [],
  performance: {
    hints: 'warning'
  }
});
