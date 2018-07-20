#!/usr/bin/env node

// Global import
const commander = require('commander');

// Local import
const packageJson = require('../package');
const log = require('../scripts/log');

let taskName;
const program = new commander.Command('omnious-webpack')
  .version(packageJson.version, '-v, --version')
  .arguments('<task>')
  .usage('<task> [options]')
  .option('-m, --mode [value]', 'target UI library')
  .option('-l, --lang [value]', 'transpile language')
  .option('-a, --add [value]', 'additional webpack config')
  .action(task => {
    taskName = task;
  })
  .parse(process.argv);

if (!taskName) {
  log.error(`Please specify webpack task!
   Usage: omnious-webpack <task> [options]
  `);
  process.exit(1);
}

function webpackScript(task, options = {}) {
  switch (task) {
    case 'build': {
      const build = require('../scripts/build');
      build(options);
      break;
    }
    case 'watch': {
      const watch = require('../scripts/watch');
      watch(options);
      break;
    }
    case 'test':
    default:
      return log.error(`Unknown task: ${task}`);
  }
}

webpackScript(taskName, {
  mode: program.mode || 'react',
  lang: program.lang || 'ts',
  add: program.add
});
