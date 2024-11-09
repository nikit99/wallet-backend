const { DataTypes } = require('sequelize');
const db = require('../config/db');

const User = db.define('User', {
  user_id: { // This matches the column name in your database
    type: DataTypes.STRING,
    primaryKey: true,
  },
  balance: {
    type: DataTypes.FLOAT,
    defaultValue: 0.0,
  },
}, {
  timestamps: false,
  tableName: 'users', // Explicitly reference the correct table
});

module.exports = User;
