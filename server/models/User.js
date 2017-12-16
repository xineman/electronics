const Sequelize = require('sequelize');
const sequelize = require('../services/sequelize');
const Product = require('./Product');

const User = sequelize.define('user', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: Sequelize.STRING },
  username: { type: Sequelize.STRING },
  password: { type: Sequelize.STRING },
  email: { type: Sequelize.STRING },
  phone: { type: Sequelize.STRING },
  address: { type: Sequelize.STRING },
});

User.belongsToMany(Product, {
  through: 'user_wishes',
  as: 'wishes',
});

User.belongsToMany(Product, {
  through: 'user_cart',
  as: 'cart',
});

module.exports = User;
