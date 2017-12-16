const cli = require('cli');
const { usersFixture, categoriesFixture, productsFixture } = require('../fixtures');
const sequelize = require('../services/sequelize');

const arg = cli.args;

async function handleCommand(args) {
  switch (args[0]) {
    case 'fixture': {
      await sequelize.sync({ force: true });
      await usersFixture();
      await categoriesFixture();
      await productsFixture();
      return 'Fixtures created';
    }
    default:
      return 'No command found';
  }
}


handleCommand(arg)
  .then(result => cli.output('[Result]: ', result) || process.exit())
  .catch(error => cli.output('[Error]: ', error) || process.exit());
