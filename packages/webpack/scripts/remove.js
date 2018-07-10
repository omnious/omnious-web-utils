// Global import
const rm = require('rimraf');

module.exports = path =>
  new Promise((resolve, reject) => {
    rm(path, err => (err ? reject(err) : resolve()));
  });
