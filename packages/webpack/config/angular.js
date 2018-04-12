// Global import
const { ContextReplacementPlugin } = require('webpack');

// Local import
const { srcDir } = require('./path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: srcDir,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          },
          'angular2-template-loader'
        ]
      }
    ]
  },
  plugins: [new ContextReplacementPlugin(/\@angular(\\|\/)core(\\|\/)esm5/, srcDir)]
};
