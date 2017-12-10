const Category = require('../models/Category');


async function categoriesFixture() {
  await Category.sync({ force: true });
  const categorysMock = [
    {
      name: 'laptops',
    },
    {
      name: 'cameras',
    },
    {
      name: 'phones',
    },
  ];
  const promises = [];
  for (const category of categorysMock) {
    promises.push(Category.create(category));
  }
  return Promise.all(promises)
    .then(() => 'category fixtures created');
}

module.exports = categoriesFixture;
