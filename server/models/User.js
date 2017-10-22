const Sequelize = require('sequelize');
const sequelize = require('../services/sequelize');

const User = sequelize.define('user', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: Sequelize.STRING },
  username: { type: Sequelize.STRING },
  password: { type: Sequelize.STRING },
  email: { type: Sequelize.STRING },
  phone: { type: Sequelize.STRING },
  address: { type: Sequelize.STRING },
});

module.exports = User;
