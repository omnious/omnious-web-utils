/**
 * COMMON WEBPACK CONFIG
 */

// Global import
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');

// Local import
const { PACKAGE, SRC } = require('./paths');


module.exports = {
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {},
    plugins: [
      new ModuleScopePlugin(SRC, [PACKAGE])
    ]
  },
  module: {
    rules: []
  },
  plugins: []
};
