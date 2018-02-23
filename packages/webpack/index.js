#!/usr/bin/env node

// Global import
const commander = require('commander');

// Local import
const packageJson = require('./package');
const logger = require('./scripts/logger');


let taskName;
const program = new commander.Command('omnious-webpack')
  .version(packageJson.version)
  .arguments('<task>')
  .usage('<task> [options]')
  .action(task => {
    taskName = task;
  })
  .parse(process.argv);

if (!taskName) {
  logger.error(`Please specify webpack task!
   Usage: omniouskit-webpack <task> [options]
  `);
  process.exit(1);
}

function webpackScript(task) {
  switch (task) {
    case 'build':
      require('./scripts/build');
      break;
    case 'watch':
      require('./scripts/watch');
      break;
    case 'test':
      require('./scripts/test');
      break;
    default:
      return logger.error(`Unknown task: ${task}`);
  }
}

webpackScript(taskName);
