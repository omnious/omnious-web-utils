#!/usr/bin/env node

// Global import
const { exec } = require('child_process');
const commander = require('commander');

// Local import
const packageJson = require('./package');
const logger = require('./scripts/logger');


let taskName;
const program = new commander.Command('omniouskit-webpack')
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
  let child;
  switch (task) {
    case 'build':
      child = exec('node node_modules/@omnious/webpack/scripts/build.js');
      break;
    case 'watch':
      child = exec('node node_modules/@omnious/webpack/scripts/watch.js');
      break;
    case 'test':
      child = exec('node');
      break;
    default:
      return logger.error(`Unknown task: ${task}`);
  }

  child.stdout.on('data', data => {
    console.log(data);
  });

  child.stderr.on('data', data => {
    logger.error('Webpack build error occurs', data);
  });

  // child.on('close', code);
}

webpackScript(taskName);
