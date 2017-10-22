const Sequelize = require('sequelize');
const sequelize = require('../services/sequelize');
const Category = require('./Category');

const Product = sequelize.define('product', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: Sequelize.STRING },
  price: { type: Sequelize.INTEGER },
  stock: { type: Sequelize.INTEGER },
  params: { type: Sequelize.STRING },
  image: { type: Sequelize.STRING },
  categoryId: {
    type: Sequelize.INTEGER,
    references: {
      model: Category,
      key: 'id',
    },
  },
});

module.exports = Product;
