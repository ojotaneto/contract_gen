'use strict';
const tableName = "cars"
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    return queryInterface.createTable(tableName, {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },

      marca: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      modelo: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      placa: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      numerochassi: {
        type: Sequelize.STRING,
        allowNull: false,

      },

      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },

      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      }

    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable(tableName);
  }
};


