const cli = require('cli');
const { usersFixture } = require('../fixtures');

const arg = cli.args;

function handleCommand(args) {
  switch (args[0]) {
    case 'fixture': {
      return usersFixture();
    }
    default:
      return 'No command found';
  }
}


handleCommand(arg)
  .then(result => cli.output('[Result]: ', result))
  .catch(error => cli.output(error));
