'use strict';
module.exports = (sequelize, DataTypes) => {
  const Enterprise = sequelize.define('Enterprise', {
    name: DataTypes.STRING,
    status : DataTypes.BOOLEAN,
  }, { tableName : 'enterprise' , createdAt: 'created_at', updatedAt: 'update_at'});
  
  Enterprise.associate = function(models) {
    // associations can be defined here
  };
  return Enterprise;
};

