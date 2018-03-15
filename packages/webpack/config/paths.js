// Global import
const { resolve } = require('path');

const root = process.cwd();
const packageJson = resolve(root, 'package.json');
const distDir = resolve(root, 'dist');
const srcDir = resolve(root, 'src');
const indexHtml = resolve(srcDir, 'index.html');
const staticDir = resolve(root, 'static');

module.exports = {
  distDir,
  indexHtml,
  packageJson,
  root,
  srcDir,
  staticDir
};
