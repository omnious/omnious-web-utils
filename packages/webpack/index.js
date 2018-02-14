#!/usr/bin/env node

// Global import
const { exec } = require('child_process');
const commander = require('commander');

// Local import
const packageJson = require('./package');


const program = new commander.Command(packageJson.name)
  .version(packageJson.version)
  .arguments('<task>')
  .usage('<task> [options]')
  .parse(process.argv);

if (!program.task) {
  console.log('No task');
  process.exit(1);
}

function webpackScript(task) {
  console.log('enter!', task);
  let child;
  switch (task) {
    case 'build':
      child = exec('node scripts/build.js');
      break;
    case 'watch':
      child = exec('node scripts/watch.js');
      break;
    case 'test':
      child = exec('node');
      break;
    default:
      throw new Error(`Unknown task: ${task}`);
  }

  child.stdout.on('data', data => {
    console.log('stdout: ', data);
  });

  child.stderr.on('data', data => {
    console.log('stderr: ', data);
  });

  // child.on('close', code)
}

webpackScript(program.task);
