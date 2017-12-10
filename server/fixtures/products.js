const Product = require('../models/Product');


async function productsFixture() {
  await Product.sync({ force: true });
  const productsMock = [
    {
      name: 'HP Laptop',
      price: 850,
      stock: 3,
      params: JSON.stringify({
        screen: '15.6"',
        hdd: '500 GB',
      }),
      image: 'http://via.placeholder.com/850x500',
      categoryId: 1,
    },
    {
      name: 'Xiaomi Camera',
      price: 80,
      stock: 15,
      params: JSON.stringify({
        screen: '15.6"',
        hdd: '500 GB',
      }),
      image: 'http://via.placeholder.com/850x500',
      categoryId: 2,
    },
    {
      name: 'Apple iPhone',
      price: 1200,
      stock: 2,
      params: JSON.stringify({
        screen: '6"',
        storage: '256 GB',
      }),
      image: 'http://via.placeholder.com/850x500',
      categoryId: 3,
    },
  ];
  const promises = [];
  for (const product of productsMock) {
    promises.push(Product.create(product));
  }
  return Promise.all(promises)
    .then(() => 'product fixtures created');
}

module.exports = productsFixture;
