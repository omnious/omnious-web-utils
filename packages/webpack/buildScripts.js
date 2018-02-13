const commander = require('commander');

const program = new commander.Command().parse(process.argv);

function webpackScript(options) {
  console.log(options);
}

webpackScript();
