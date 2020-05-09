'use strict';
module.exports = (sequelize, DataTypes) => {
  const Local = sequelize.define('Local', {
    name: DataTypes.STRING
  }, {});
  Local.associate = function(models) {
    // associations can be defined here
  };
  return Local;
};