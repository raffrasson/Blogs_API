const { DataTypes } = require('sequelize');

const Attributes = {
  postId: {
    type: DataTypes.INTEGER,
    foreignKey: true,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    foreignKey: true,
  },
};

module.exports = (sequelize) => {
  const PostsCategory = sequelize.define('PostsCategory', Attributes,
  { timestamps: false, tableName: 'PostsCategories' }, {
      underscored: false,
      timestamps: false,
      tableName: 'PostsCategories',
    });

    PostsCategory.associate = (models) => {
      models.Category.belongsToMany(models.blogPost, { 
        foreingKey: 'postId', otherKey: 'categoryId', through: PostsCategory, as: 'blogPosts' });
    };

    PostsCategory.associate = (models) => {
      models.BlogPost.belongsToMany(models.Category, { 
        foreingKey: 'categoryId', otherKey: 'postId', through: PostsCategory, as: 'categories' });
    };

  return PostsCategory;
};
