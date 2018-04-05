process.on('unhandledRejection', err => {
  throw err;
});

// Global import
const clearConsole = require('react-dev-utils/clearConsole');
const openBrowser = require('react-dev-utils/openBrowser');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

// Local import
const logger = require('./logger');
const { env, host, port } = require('../config/env');
const { staticDir } = require('../config/path');
const webpackConfig = require('../webpack.config');

module.exports = (mode, options) => {
  // Initialize console
  clearConsole();
  logger.start(`Starting build in ${env} mode`);

  // Set DevServer
  const devConfig = webpackConfig(env, { mode, ...options });
  const compiler = webpack(devConfig);
  const devOptions = {
    contentBase: staticDir,
    historyApiFallback: {
      disableDotRule: true
    },
    host,
    hot: true,
    noInfo: true,
    publicPath: devConfig.output.publicPath,
    stats: {
      colors: true
    }
  };
  const devServer = new WebpackDevServer(compiler, devOptions);

  // Start server
  devServer.listen(port, host, err => {
    if (err) {
      logger.error(err);
    } else {
      const url = `http://${host}:${port}`;
      logger.end(`Setting timer to open browser at ${url}, in ${env}`);
      openBrowser(url);
    }
  });

  for (const sig of ['SIGINT', 'SIGTERM']) {
    process.on(sig, code => {
      logger.info('Shutting down app');
      devServer.close();
      process.exit(code || 0);
    });
  }
};
