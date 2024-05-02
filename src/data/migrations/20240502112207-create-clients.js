'use strict';

const tablename = "clients";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable(tablename, {

      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },

      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      endereco: {
        type: Sequelize.STRING,
        allowNull: false
      },

      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      telefone: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      cpfcnpj: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      numerocnh: {
        type: Sequelize.STRING,
        allowNull: false,
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
    return queryInterface.dropTable(tablename);
  }
};
