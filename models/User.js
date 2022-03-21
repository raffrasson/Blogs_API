const { DataTypes } = require('sequelize');

const Attributes = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  displayName: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  image: {
    allowNull: false,
    type: DataTypes.STRING,
  },
};

module.exports = (sequelize) => {
  const User = sequelize.define('User', 
    Attributes, {
      underscored: true,
      timestamps: false,
      tableName: 'users',
    });

    User.associate = (models) => {
      User.hasMany(models.BlogPost, { foreignKey: 'UserId', as: 'user' });
    };

  return User;
};
