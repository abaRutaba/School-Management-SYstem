'use strict';
module.exports = function(sequelize, DataTypes) {
  var Result = sequelize.define('Result', {
    Date: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Result;
};