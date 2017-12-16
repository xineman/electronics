const faker = require('faker'); // eslint-disable-line
const Product = require('../models/Product');


async function productsFixture() {
  const promises = [];
  for (let i = 0; i < 100; i += 1) {
    promises.push(Product.create({
      name: faker.commerce.productName(),
      categoryId: faker.random.number({ min: 1, max: 16, precision: 1 }),
      price: faker.random.number({ min: 100000, max: 8000000 }),
      stock: faker.random.number(40),
      params: JSON.stringify({
        [faker.commerce.productMaterial()]: faker.commerce.productAdjective(),
        [faker.commerce.productMaterial()]: faker.commerce.productAdjective(),
        [faker.commerce.productMaterial()]: faker.commerce.productAdjective(),
        [faker.commerce.productMaterial()]: faker.commerce.productAdjective(),
        [faker.commerce.productMaterial()]: faker.commerce.productAdjective(),
      }),
      image: faker.image.imageUrl(),
    }));
  }
  return Promise.all(promises)
    .then(() => 'product fixtures created');
}

module.exports = productsFixture;
