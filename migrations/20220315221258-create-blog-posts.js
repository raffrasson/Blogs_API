'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const BlogPosts = queryInterface.createTable('BlogPosts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      }, 
      content: {        
        allowNull: false,
        type: Sequelize.STRING
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        // referência: https://dev.mysql.com/doc/refman/8.0/en/create-table-foreign-keys.html, sessão referential actions, bem como o esquenta do projeto.
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: "Users", key: "id"
        }  
      },
      published: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated: {
        allowNull: false,
        type: Sequelize.DATE}
    })
  },

  down: async (queryInterface, Sequelize) => {
     queryInterface.dropTable('BlogPosts');
  }
};
