'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'FriendRelations',
      {
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        userOneId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          unique: true
        },
        userTwoId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          unique: true
        },
        friendStatusId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        actionUserId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    // remove table
    return queryInterface.dropTable('FriendRelations');
  }
};
