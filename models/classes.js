'use strict';
module.exports = function(sequelize, DataTypes) {
  var classes = sequelize.define('classes', {
    ClassName: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return classes;
};