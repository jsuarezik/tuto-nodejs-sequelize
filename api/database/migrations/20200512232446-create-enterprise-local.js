'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('enterprise_local', {
      enterprise_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references : {
          model : 'enterprise',
          key : 'id'
        }
      },
      local_id: {
        allowNull : false,
        primaryKey : true,
        type: Sequelize.INTEGER,
        references : {
          model : 'local',
          key : 'id'
        }
      },
      status : {
        allowNull : false, 
        defaultValue : true,
        type : Sequelize.BOOLEAN
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue : Sequelize.NOW
      },
      update_at: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('enterprise_local');
  }
};