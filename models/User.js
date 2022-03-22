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
      timestamps: false,
      tableName: 'Users',
      displayName: 'display_name', // o uderscore não estava funcionando, usei a solução encontrada aqui parar trocar o displayName: https://github.com/sequelize/sequelize/issues/10857
    });

    User.associate = (models) => {
      User.hasMany(models.BlogPost, { foreignKey: 'userId', as: 'BlogPosts' });
    };

  return User;
};
