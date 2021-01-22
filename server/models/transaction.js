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
    }
  };
  Transaction.init({
    id: {
      primaryKey: true,
      type: DataTypes.UUID
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
    CustomerId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Transaction',
    hooks: {
      beforeCreate: (Transaction, opt) => {
        Transaction.id = uuidv4()
      }
    }
  });
  return Transaction;
};