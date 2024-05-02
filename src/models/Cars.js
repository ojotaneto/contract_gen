const { DataTypes, Model } = require("sequelize");

class Cars extends Model {
  static init(sequelize) {
    super.init({
      marca: DataTypes.STRING,
      modelo: DataTypes.STRING, 
      numero_chassi: DataTypes.STRING, 
      renavam: DataTypes.STRING, 
      numero_motor: DataTypes.STRING,
    }, { sequelize })
  }

  static associate
}