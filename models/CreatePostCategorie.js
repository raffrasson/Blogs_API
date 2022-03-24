module.exports = (sequelize) => {
  const PostCategory = sequelize.define('PostCategory', 
    {}, {
      underscored: true,
      timestamps: false,
      tableName: 'postCategories',
      categoryId: 'category_id',
    });

    PostCategory.associate = (models) => {
      models.Category.belongsToMany(models.blogPosts, { 
        foreingKey: 'postId', otherKey: 'category_id', through: PostCategory, as: 'Categories' });
    };

    PostCategory.associate = (models) => {
      models.BlogPost.belongsToMany(models.Category, { 
        foreingKey: 'category_id', otherKey: 'postId', through: PostCategory, as: 'Posts' });
    };

  return PostCategory;
};
