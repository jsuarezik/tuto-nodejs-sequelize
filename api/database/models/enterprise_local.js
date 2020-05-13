'use strict';
module.exports = (sequelize, DataTypes) => {
  const EnterpriseLocal = sequelize.define('EnterpriseLocal', {
    name: DataTypes.STRING
  }, { tableName: 'enterprise_local', createdAt: 'created_at', updatedAt : 'updateAt'});
  EnterpriseLocal.associate = function(models) {
    // associations can be defined here
  };
  return EnterpriseLocal;
};