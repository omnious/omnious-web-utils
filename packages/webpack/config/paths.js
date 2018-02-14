// Global import
const { resolve } = require('path');


const ROOT = process.cwd();
const PACKAGE = resolve(ROOT, 'package.json');
const DIST = resolve(ROOT, 'dist');
const SRC = resolve(ROOT, 'src');
const STATIC = resolve(ROOT, 'static');

module.exports = { DIST, PACKAGE, ROOT, SRC, STATIC };
