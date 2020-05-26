'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    email : DataTypes.STRING,
    password : DataTypes.STRING
  }, { tableName: 'user', createdAt : 'created_at' , updatedAt : 'updated_at' });
  
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};