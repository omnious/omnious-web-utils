process.on('unhandledRejection', err => {
  throw err;
});

// Global import
const clearConsole = require('react-dev-utils/clearConsole');
const openBrowser = require('react-dev-utils/openBrowser');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

// Local import
const log = require('./log');
const webpackConfig = require('../src/Bundler');
const { env, host, port } = require('../src/utils/env');
const { staticDir } = require('../src/utils/path');

module.exports = options => {
  // Initialize console
  clearConsole();
  log.start(`Starting build in ${env} mode`);

  // Set DevServer
  const devConfig = webpackConfig(env, options);
  const compiler = webpack(devConfig);
  const devServer = new WebpackDevServer(compiler, {
    contentBase: staticDir,
    historyApiFallback: {
      disableDotRule: true
    },
    host,
    hotOnly: true,
    inline: true,
    noInfo: true,
    port,
    publicPath: '/',
    stats: {
      colors: true
    }
  });

  // Start server
  devServer.listen(port, host, err => {
    if (err) {
      log.error(err);
    } else {
      const url = `http://${host}:${port}`;
      log.end(`Setting timer to open browser at ${url}, in ${env}`);
      openBrowser(url);
    }
  });

  for (const sig of ['SIGINT', 'SIGTERM']) {
    process.on(sig, code => {
      log.info('Shutting down app');
      devServer.close();
      process.exit(code || 0);
    });
  }
};
