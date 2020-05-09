'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('enterprise', [{
        name: 'foo company',
        created_at : new Date(),
        updated_at : new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('enterprise', null, {});
  }
};
