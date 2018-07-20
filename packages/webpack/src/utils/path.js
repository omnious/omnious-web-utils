// Global import
const { resolve } = require('path');

const root = process.cwd();
const packageJson = resolve(root, 'package.json');
const distDir = resolve(root, 'dist');
const srcDir = resolve(root, 'src');
const staticDir = resolve(root, 'static');
const indexHtml = resolve(srcDir, 'index.html');
const polyfills = resolve(srcDir, 'polyfills');
const vendor = resolve(srcDir, 'vendor');
const componentsDir = resolve(srcDir, 'components');
const containersDir = resolve(srcDir, 'containers');
const hocDir = resolve(srcDir, 'hoc');
const utilsDir = resolve(srcDir, 'utils');

module.exports = {
  componentsDir,
  containersDir,
  distDir,
  hocDir,
  indexHtml,
  packageJson,
  polyfills,
  root,
  srcDir,
  staticDir,
  utilsDir,
  vendor
};
