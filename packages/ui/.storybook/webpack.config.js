// module.exports = {
//   resolve: { extensions: ['.css', '.js', '.json', '.jsx', '.md', '.ts', '.tsx'], alias: {} },
//   module: {
//     rules: [
//       { test: /\.jsx?$/, use: 'babel-loader', exclude: /node_modules/ },
//       { test: /\.tsx?$/, use: { loader: 'ts-loader' }, exclude: /node_modules/ },
//       {
//         test: /\.s?css$/,
//         use: [
//           'style-loader',
//           { loader: 'css-loader', options: { importLoaders: 1 } },
//           { loader: 'postcss-loader', options: { plugins: [require('autoprefixer')] } }
//         ]
//       }
//     ]
//   }
// };
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
        use: 'ts-loader'
      }
    ]
  },
  plugins: [...defaultConfig.plugins, new TSDocgenPlugin()]
});
