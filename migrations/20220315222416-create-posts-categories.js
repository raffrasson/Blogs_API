module.exports = {
  up: async (queryInterface, Sequelize) => {
    const PostsCategories = queryInterface.createTable('PostsCategories', {
      postId:{
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model:'BlogPosts',
          key: 'id'          
        }

        
      },
      categoryId:{
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model:'Categories',
          key: 'id'
        }     
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('PostsCategories');
  }
};
