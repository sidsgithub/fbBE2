'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Comments', // name of Source model
      'parentId', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Comments', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Comments', // name of Source model
      'parentId' // key we want to remove
    );
  }
};