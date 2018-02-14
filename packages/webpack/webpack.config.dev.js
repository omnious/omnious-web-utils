/**
 * DEV WEBPACK CONFIG
*/

module.exports = smart(common, {
  devtool: 'eval-source-map',
  entry: [],
  output: {},
  module: {
    rules: []
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  performance: {
    hints: false
  }
});
