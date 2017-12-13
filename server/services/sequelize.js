const Sequelize = require('sequelize');
const { db } = require('config');

const sequelize = new Sequelize(db.name, db.user, db.pass, {
  host: db.host,
  port: db.port,
  dialect: 'mysql',
});

module.exports = sequelize;
