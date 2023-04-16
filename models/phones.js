'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class phones extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  }
  phones.init(
    {
      model: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^(\w+\d*(\s|-)?)(\w*\d*(\s|-)?)*$/,
          len: [2, 64],
        },
      },
      brand: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^(\w+\d*(\s|-)?)(\w*\d*(\s|-)?)*$/,
          len: [2, 32],
        },
      },
      ram: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { min: 1 },
      },
      processor: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^(\w+\d*(\s|-)?)(\w*\d*(\s|-)?)*$/,
          len: [2, 64],
        },
      },
      screenDiagonal: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: { min: 1 },
      },
      manufactureYear: {
        type: DataTypes.DATEONLY,
      },
      nfc: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      image: DataTypes.STRING,
    },

    {
      sequelize,
      modelName: 'phones',
    }
  );
  return phones;
};
