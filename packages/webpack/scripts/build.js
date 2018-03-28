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
const { env } = require('../config');
const webpackConfig = require('../webpack.config');

module.exports = options => {
  // Initialize console
  clearConsole();
  logger.start(`Starting build in ${env} mode`);

  try {
    // Create spinner
    const spinner = ora('Building client');
    spinner.start();

    // Generate bundle files
    const buildConfig = webpackConfig(env, options);
    const compiler = webpack(buildConfig);

    compiler.run((err, stats) => {
      spinner.stop();
      const rawMessages = stats.toJson({}, true);
      const messages = formatWebpackMessages(rawMessages);

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
    });
  } catch (err) {
    logger.error(err.message);
  }
};
