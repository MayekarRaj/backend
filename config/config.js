const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mydb', 'root', 'admin', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;