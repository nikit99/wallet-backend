const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Transaction = db.define('Transaction', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM('topup', 'deduct'),
    allowNull: false,
  },
}, {
  timestamps: false,  // Disable automatic timestamps
  tableName: 'transactions',
});

module.exports = Transaction;
