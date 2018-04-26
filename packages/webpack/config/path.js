// Global import
const { resolve } = require('path');

const root = process.cwd();
const packageJson = resolve(root, 'package.json');
const distDir = resolve(root, 'dist');
const srcDir = resolve(root, 'src');
const indexHtml = resolve(srcDir, 'index.html');
const polyfills = resolve(srcDir, 'polyfills');
const vendor = resolve(srcDir, 'vendor');
const staticDir = resolve(root, 'static');

module.exports = {
  distDir,
  indexHtml,
  packageJson,
  polyfills,
  root,
  srcDir,
  staticDir,
  vendor
};
