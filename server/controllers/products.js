const Product = require('../models/Product');

function getProduct(req, res) {
  Product.find({
    where: {
      id: req.params.id,
    },
    raw: true,
  })
    .then(r => res.json(Object.assign({}, r, { params: JSON.parse(r.params) })))
    .catch(console.log);
}

function getAll(req, res) {
  Product.findAll({
    raw: true,
  })
    .then(records => res.json(records.map(r =>
      Object.assign({}, r, { params: JSON.parse(r.params) }))))
    .catch(console.log);
}

function buy(req, res) {
  res.sendStatus(200);
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
  buy,
  create,
};