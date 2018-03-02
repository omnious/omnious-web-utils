process.on('unhandledRejection', err => {
  throw err;
});

// Global import
const ora = require('ora');
const clearConsole = require('react-dev-utils/clearConsole');
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');
const webpack = require('webpack');

// Local import
const logger = require('./logger');
const remove = require('./remove');
const { env } = require('../config');
const { distDir } = require('../config/paths');
const webpackConfig = require('../webpack.config');


module.exports = language => {
  // Initialize console
  clearConsole();
  logger.start(`Starting build in ${env} mode`);

  // Remove existing bundles
  remove(distDir)
    .then(() => {
      const buildConfig = webpackConfig(env, language);

      // Create spinner
      const spinner = ora('Building client');
      spinner.start();

      // Generate bundle files
      webpack(buildConfig, (err, stats) => {
        spinner.stop();
        const rawMessages = stats.toJson({}, true);
        const messages = formatWebpackMessages(rawMessages);

        if (!messages.errors.length && !messages.warnings.length) {
          // Webpack build success
          logger.success('Client compiled successfully');
          logger.end(stats.toString({ colors: true }));
        }

        if (messages.errors.length) {
          // Build fail
          logger.error('Failed to compile');
          messages.errors.forEach(logger.error);
        }

        if (messages.warnings.length) {
          // Warning occurs
          logger.warn('Compiled with warnings');
          messages.warnings.forEach(logger.warn);
          logger.end(stats.toString({ colors: true, warnings: false }));
        }
      });
    })
    .catch(err => {
      logger.error(err.message);
    });
};
