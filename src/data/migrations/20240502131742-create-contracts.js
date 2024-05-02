'use strict';

/** @type {import('sequelize-cli').Migration} */
const contractName = "contracts";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable(contractName, {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      contract_content: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      client_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: { tableName: 'clients' },
          key: "id",
        }

      },
      car_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: { tableName: "cars" },
          key: "id",
        }
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
    return queryInterface.dropTable(contractName);
  }
};
