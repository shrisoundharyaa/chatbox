const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');  // Adjust the path as necessary

const User = sequelize.define('User', {
  // Define your model attributes here
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = User;
