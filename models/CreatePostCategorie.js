module.exports = (sequelize) => {
  const PostCategory = sequelize.define('PostCategory', 
    {}, {
      underscored: true,
      timestamps: false,
      tableName: 'postCategories',
    });

    PostCategory.associate = (models) => {
      models.Category.belongsToMany(models.blogPosts, { 
        foreingKey: 'postId', otherKey: 'category_id', through: PostCategory, as: 'categories' });
    };

    PostCategory.associate = (models) => {
      models.BlogPost.belongsToMany(models.Category, { 
        foreingKey: 'category_id', otherKey: 'postId', through: PostCategory, as: 'posts' });
    };

  return PostCategory;
};
