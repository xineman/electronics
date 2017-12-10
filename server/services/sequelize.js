const Sequelize = require('sequelize');

const sequelize = new Sequelize('electronics', 'xineman', 'air228', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
});

module.exports = sequelize;
