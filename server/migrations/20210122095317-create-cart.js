'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Carts', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      total: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      status: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      TicketId: {
        references: {
          model: 'Tickets',
          key: 'id'
        },
        type: Sequelize.UUID
      },
      TransactionId: {
        references: {
          model: 'Transactions',
          key: 'id'
        },
        type: Sequelize.UUID
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Carts');
  }
};