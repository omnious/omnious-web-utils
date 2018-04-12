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
const { env } = require('../config/env');
const webpackConfig = require('../webpack.config');

module.exports = (mode, options) => {
  // Initialize console
  clearConsole();
  logger.start(`Starting build in ${env} mode`);

  // Create spinner
  const spinner = ora('Building client');
  const buildConfig = webpackConfig(env, { mode, ...options });
  const compiler = webpack(buildConfig);
  spinner.start();

  // Generate bundle files
  compiler.run((err, stats) => {
    if (err) {
      logger.error(err);
    } else {
      const rawMessages = stats.toJson({}, true);
      const messages = formatWebpackMessages(rawMessages);
      spinner.stop();

      if (!messages.errors.length && !messages.warnings.length) {
        // Webpack build success
        logger.end('Client compiled successfully');
        logger.info('Build outputs', stats.toString({ colors: true }));
      }

      if (messages.warnings.length) {
        // Warning occurs
        logger.warn('Compiled with warnings', messages.warnings);
        logger.info('Build outputs', stats.toString({ colors: true, warnings: false }));
      }

      if (messages.errors.length) {
        // Build fail
        logger.error('Failed to compile', messages.errors);
      }
    }
  });
};
