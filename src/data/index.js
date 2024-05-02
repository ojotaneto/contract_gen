const Sequelize = require("sequelize");
const dbConfig = require('../config/index.database');

const sequelize = new Sequelize(dbConfig);
module.exports = sequelize; 