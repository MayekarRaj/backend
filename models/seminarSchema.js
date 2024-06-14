const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const PastSeminar = sequelize.define('PastSeminar', {
  studentName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  seminarTitle: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dateAttended: {
    type: DataTypes.DATE,
    allowNull: false
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = PastSeminar;
