module.exports = {
  // syntax: 'postcss-scss',
  plugins: [
    require('postcss-partial-import')({ prefix: '_' }),
    require('autoprefixer'),
    // require('postcss-strip-inline-comments'),
    require('postcss-nested')
    // require('postcss-simple-vars')
    // require('cssnano')
  ]
};
