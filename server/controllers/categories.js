const Category = require('../models/Category');

function getAll(req, res) {
  Category.findAll()
    .then(result => res.json(result));
}

function create(req, res) {
  Category.create({
    name: req.body.name,
  })
    .then(result => res.json(result))
    .catch(console.log);
}

module.exports = {
  getAll,
  create,
};
