'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('contracts', {

      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      contract_content: {

        type: Sequelize.STRING,
        allowNull: false,
      },

      // cars_id: {
      //   type: Sequelize.INTEGER,
      //   allowNull: false,
      //   references: { model: "cars" },
      //   key: "id",

      // },

      // client_id: {
      //   type: Sequelize.INTEGER,
      //   allowNull: false,
      //   references: { model: "clients" },
      //   key: "id",

      // },

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
    return queryInterface.dropTable('contracts');
  }
};
