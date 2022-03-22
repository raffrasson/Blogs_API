const { DataTypes } = require('sequelize');

const Attributes = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING,
  }, 
  content: {        
    allowNull: false,
    type: DataTypes.STRING,
  },
  userId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    // referência: https://dev.mysql.com/doc/refman/8.0/en/create-table-foreign-keys.html, sessão referential actions, bem como o esquenta do projeto.
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    references: {
      model: 'Users', key: 'id',
    },  
  },
  published: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  updated: {
    allowNull: false,
    type: DataTypes.DATE, 
  },
};

module.exports = (sequelize) => {
  const BlogPost = sequelize.define('BlogPost', Attributes,
  {
      timestamps: false,
      tableName: 'BlogPosts',
    });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  };

  return BlogPost;
};