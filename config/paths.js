const { resolve } = require('path');

const ROOT = process.cwd();
const SRC = resolve(ROOT, 'packages');
const STORYBOOK = resolve(ROOT, '.storybook');

module.exports = { ROOT, SRC, STORYBOOK };
