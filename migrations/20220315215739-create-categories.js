'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const CategoriesTable = queryInterface.createTable('Categories',{
      id: {
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
   queryInterface.dropTable('Categories');
  }
};
