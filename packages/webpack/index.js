#!/usr/bin/env node

// Global import
const commander = require('commander');

// Local import
const packageJson = require('./package');
const logger = require('./scripts/logger');

let taskName;
const program = new commander.Command('omnious-webpack')
  .version(packageJson.version, '-v, --version')
  .arguments('<task>')
  .usage('<task> [options]')
  .option('-l, --language [value]', 'webpack compile language')
  .option('-a, --add [value]', 'additional webpack config')
  .action(task => {
    taskName = task;
  })
  .parse(process.argv);

if (!taskName) {
  logger.error(`Please specify webpack task!
   Usage: omnious-webpack <task> [options]
  `);
  process.exit(1);
}

function webpackScript(task, options = {}) {
  switch (task) {
    case 'build': {
      const builder = require('./scripts/build');
      builder(options);
      break;
    }
    case 'watch': {
      const watcher = require('./scripts/watch');
      watcher(options);
      break;
    }
    case 'test':
      require('./scripts/test');
      break;
    default:
      return logger.error(`Unknown task: ${task}`);
  }
}

webpackScript(taskName, {
  language: program.language,
  add: program.add
});
