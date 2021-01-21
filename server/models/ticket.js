const { v4: uuidv4 } = require('uuid');
uuidv4();

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Ticket.belongsTo(models.Events)
      Ticket.hasMany(models.Transaction)
    }
  };
  Ticket.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID
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
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Type is required'
        },
        notEmpty: {
          args: true,
          msg: 'Type is required'
        }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Type is required'
        },
        min: 0
      }
    },
    quota: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Type is required'
        },
        min: 0
      }
    },
    EventId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Ticket',
    hooks: {
      beforeCreate: (ticket, opt) => {
        ticket.id = uuidv4()
      }
    }
  });
  return Ticket;
};