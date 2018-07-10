// Global import
const chalk = require('chalk');

function write(status, text, verbose) {
  switch (status) {
    case 'task':
      console.log(chalk.green.bold(`\n👍  ${text}\n`));
      break;
    case 'warn':
      console.log(chalk.yellow.bold(`\n⛈  ${text}\n`));
      break;
    case 'error':
      console.log(chalk.red.bold(`\n💀  ${text}\n`));
      break;
    case 'start':
      console.log(chalk.cyan.bold(`\n🔥  ${text}\n`));
      break;
    case 'end':
      console.log(chalk.white.bold(`🎉  ${text}`));
      break;
    case 'info':
    default:
      console.log(chalk.white.bold(`💡  ${text}`));
  }

  // Adds optional verbose output
  if (verbose) {
    if (verbose.constructor === Object) {
      console.dir(verbose, { depth: 15 });
    } else if (verbose.constructor === Array) {
      verbose.forEach(msg => {
        console.log(`\n${msg}`);
      });
    } else {
      console.log(`\n${verbose}`);
    }
  }
}

module.exports = {
  start: text => write('start', text),
  task: text => write('task', text),
  end: text => write('end', text),
  info: (text, data) => write('info', text, data),
  warn: (text, data) => write('warn', text, data),
  error: (text, err) => write('error', text, err)
};
