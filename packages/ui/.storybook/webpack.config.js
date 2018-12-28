// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { resolve } = require('path');
const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin');

module.exports = (baseConfig, env, defaultConfig) => ({
  ...defaultConfig,
  resolve: {
    ...defaultConfig.resolve,
    extensions: [...defaultConfig.resolve.extensions, '.ts', '.tsx']
  },
  module: {
    ...defaultConfig.module,
    rules: [
      ...defaultConfig.module.rules,
      {
        test: /\.(ts|tsx)$/,
        use: 'babel-loader',
        include: resolve(process.cwd(), 'src'),
        exclude: /node_modules/
      }
    ]
  },
  plugins: [...defaultConfig.plugins, new TSDocgenPlugin()]
});
