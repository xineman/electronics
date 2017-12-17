const Sequelize = require('sequelize');
const sequelize = require('../services/sequelize');

const Category = sequelize.define('category', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: Sequelize.STRING },
});

module.exports = Category;
