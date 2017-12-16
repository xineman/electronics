const faker = require('faker'); // eslint-disable-line
const Category = require('../models/Category');


async function categoriesFixture() {
  const promises = [];
  for (let i = 0; i <= 15; i += 1) {
    promises.push(Category.create({
      name: faker.commerce.department(),
    }));
  }
  return Promise.all(promises)
    .then(() => 'category fixtures created');
}

module.exports = categoriesFixture;
