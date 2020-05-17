'use strict';
module.exports = (sequelize, DataTypes) => {
  const Enterprise = sequelize.define('Enterprise', {
    name: DataTypes.STRING,
    status : DataTypes.BOOLEAN,
  }, { tableName : 'enterprise' , createdAt: 'created_at', updatedAt: 'updated_at'});
  
  Enterprise.associate = function(models) { 
    Enterprise.hasMany(models.Local, { as : 'locals', foreignKey : 'enterprise_id'});
  };
  
  return Enterprise;
};
