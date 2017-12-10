const usersFixture = require('./users');
const productsFixture = require('./products');
const categoriesFixture = require('./categories');
const sequelize = require('../services/sequelize');

module.exports = { usersFixture, productsFixture, categoriesFixture };

(async function create() {
  try {
    await sequelize.sync({ force: true });
    await categoriesFixture();
    await productsFixture();
    await usersFixture();
  } catch (e) {
    console.log('Error:', e.message);
  }
}());
