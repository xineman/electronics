const Product = require('../models/Product');

function getProduct(req, res) {
  Product.find({
    id: req.params.id,
  })
    .then(r => (r ? res.json({
      ...r,
      params: JSON.parse(r.params),
      price: r.price / 100,
    }) : undefined))
    .catch(console.log);
}

async function filter(req, res) {
  try {
    const products = await Product.find(null, req.query);
    if (!products) {
      return res.json([]);
    }
    return res.json(products.map(r => ({
      ...r,
      price: r.price / 100,
      params: JSON.parse(r.params),
    })));
  } catch (e) {
    return e;
  }
}

async function getAll(req, res) {
  try {
    const products = await Product.find();
    if (!products) {
      return res.json([]);
    }
    return res.json(products.map(r => ({
      ...r,
      price: r.price / 100,
      params: JSON.parse(r.params),
    })));
  } catch (e) {
    return e;
  }
}


function create(req, res) {
  Product.create({
    name: 'Test laptop',
    price: 2000,
    params: JSON.stringify({ hdd: '950 GB', screen: '15 inches' }),
    categoryId: 1,
    stock: 10,
    image: 'http://via.placeholder.com/1200x900',
  })
    .then(result => res.json(result))
    .catch(console.log);
}

module.exports = {
  getProduct,
  getAll,
  filter,
  create,
};
