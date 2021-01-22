const { v4: uuidv4 } = require('uuid');

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cart.belongsTo(models.Transaction)
      Cart.belongsTo(models.Ticket)
    }
  };
  Cart.init({
    id: {
      primaryKey: true,
      type: DataTypes.UUID
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Quantity is required'
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
          msg: 'Total is required'
        },
        min: 0
      }
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Status is required'
        }
      }
    },
    TicketId: DataTypes.UUID,
    TransactionId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Cart',
    hooks: {
      beforeCreate: (Cart, opt) => {
        Cart.id = uuidv4()
        Cart.status = false
      }
    }
  });
  return Cart;
};