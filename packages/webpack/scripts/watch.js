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
const { env, host, port } = require('../config');
const devConfig = require('../webpack.config.dev');


// Initialize console
clearConsole();
logger.start(`Starting build in ${env} mode`);


// Set DevServer
const compiler = webpack(devConfig);
const options = {
  compress: true,
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
const devServer = new WebpackDevServer(compiler, options);

// Start server
devServer.listen(port, host, err => {
  if (err) {
    console.log(err);
    // logger.error(err);
  } else {
    const url = `http://${host}:${port}`;
    logger.end(`Setting timer to open browser at ${url}, in ${env}`);
    openBrowser(url);
  }
});

for (const sig of ['SIGINT', 'SIGTERM']) {
  process.on(sig, code => {
    logger.end('Shutting down app');
    devServer.close();
    process.exit(code || 0);
  });
}
