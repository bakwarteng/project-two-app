const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Animals extends Model {
  
}

Animals.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    species: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3],
        isIn: [['dog', 'cat']],
      },
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },
    breed: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'animal',
  }
);

module.exports = Animals;
