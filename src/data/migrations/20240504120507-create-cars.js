'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('cars', {
      id: {

        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },

      // contract_id: {
      //   type: Sequelize.INTEGER,
      //   allowNull: false,
      //   references: { model: "contracts" },
      //   key: "id",
      // },

      marca: {
        type: Sequelize.STRING,
        allowNull: false
      },

      modelo: {
        type: Sequelize.STRING,
        allowNull: false
      },

      placa: {
        type: Sequelize.STRING,
        allowNull: false
      },

      numerochassi: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }

    });

  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('cars');
  }
};
