const { DataTypes } = require('sequelize');

const Attributes = {
  id: {
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
};

module.exports = (sequelize) => {
  const Category = sequelize.define('Category', 
    Attributes, {
      underscored: true,
      timestamps: false,
      tableName: 'categories',
    });
    
  return Category;
};
