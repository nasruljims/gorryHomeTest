const { v4: uuidv4 } = require('uuid');
uuidv4();

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Locations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Locations.hasMany(models.Events)
    }
  };
  Locations.init({
    id: {
      primaryKey: true,
      type: DataTypes.UUID
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Address is required'
        },
        notEmpty: {
          args: true,
          msg: 'Address is required'
        }
      }
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'City is required'
        },
        notEmpty: {
          args: true,
          msg: 'City is required'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Locations',
    hooks: {
      beforeCreate: (locations, opt) => {
        locations.id = uuidv4()
      }
    }
  });
  return Locations;
};