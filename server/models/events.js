const { v4: uuidv4 } = require('uuid');
uuidv4();

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Events extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Events.belongsTo(models.Locations)
      Events.hasMany(models.Ticket)
    }
  };
  Events.init({
    id: {
      primaryKey: true,
      type: DataTypes.UUID
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Name is required'
        },
        notEmpty: {
          args: true,
          msg: 'Name is required'
        }
      }
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Start Date is required'
        },
        notEmpty: {
          args: true,
          msg: 'Start Date is required'
        }
      }
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'End Date is required'
        },
        notEmpty: {
          args: true,
          msg: 'End Date is required'
        }
      }
    },
    LocationId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Events',
    hooks: {
      beforeCreate: (events, opt) => {
        if(events.id == null) events.id = uuidv4()
      }
    }
  });
  return Events;
};