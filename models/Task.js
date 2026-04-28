const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');

const Task = sequelize.define('Task', {
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  status: { type: DataTypes.ENUM('pending', 'completed'), defaultValue: 'pending' }
});

module.exports = Task;