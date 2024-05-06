'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('clients', {
      id: {

        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,

      },

      // contract_id: {

      //   type: Sequelize.INTEGER, 
      //   allowNull: false, 
      //   references: {model: "contracts"}, 
      //   key: "id", 

      // },

      nome: {

        type: Sequelize.STRING,
        allowNull: false

      },

      cpfcnpj: {

        type: Sequelize.STRING,
        allowNull: false

      },

      numerocnh: {

        type: Sequelize.STRING,
        allowNull: false

      },

      


    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('clients');
  }
};
