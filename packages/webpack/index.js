#!/usr/bin/env node

// Global import
const commander = require('commander');

// Local import
const packageJson = require('./package');
const logger = require('./scripts/logger');

let modeName = 'react';
let taskName = 'watch';
const program = new commander.Command('omnious-webpack')
  .version(packageJson.version, '-v, --version')
  .arguments('<mode> <task>')
  .usage('<mode> <task> [options]')
  .option('-a, --add [value]', 'additional webpack config')
  .action((mode, task) => {
    modeName = mode;
    taskName = task;
  })
  .parse(process.argv);

if (!taskName) {
  logger.error(`Please specify webpack mode and task!
   Usage: omnious-webpack <mode> <task> [options]
  `);
  process.exit(1);
}

function webpackScript(mode, task, options = {}) {
  switch (task) {
    case 'build': {
      const builder = require('./scripts/build');
      builder(mode, options);
      break;
    }
    case 'watch': {
      const watcher = require('./scripts/watch');
      watcher(mode, options);
      break;
    }
    case 'test':
      require('./scripts/test');
      break;
    default:
      return logger.error(`Unknown task: ${task}`);
  }
}

webpackScript(modeName, taskName, {
  add: program.add
});
