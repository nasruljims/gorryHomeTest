const { v4: uuidv4 } = require('uuid');

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transaction.belongsTo(models.Customer)
      Transaction.belongsTo(models.Ticket)
    }
  };
  Transaction.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Type is required'
        },
        min: 1
      }
    },
    total: {
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
    status: DataTypes.BOOLEAN,
    TicketId: DataTypes.UUID,
    CustomerId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Transaction',
    hooks: {
      beforeCreate: (Transaction, opt) => {
        Transaction.id = uuidv4()
        Transaction.status = false
      }
    }
  });
  return Transaction;
};