const usersFixture = require('./users');
const productsFixture = require('./products');
const categoriesFixture = require('./categories');

module.exports = { usersFixture, productsFixture, categoriesFixture };

(async function create() {
  await categoriesFixture();
  await productsFixture();
  await usersFixture();
}());
