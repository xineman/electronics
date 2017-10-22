const Sequelize = require('sequelize');

const sequelize = new Sequelize('electronics', 'xineman', 'air_shoot648', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
});

module.exports = sequelize;
