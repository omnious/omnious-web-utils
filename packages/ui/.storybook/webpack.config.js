const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
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
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true
          }
        }
      }
    ]
  },
  plugins: [...defaultConfig.plugins, new ForkTsCheckerWebpackPlugin(), new TSDocgenPlugin()]
});
