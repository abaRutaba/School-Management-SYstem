'use strict';
module.exports = function(sequelize, DataTypes) {
  var exam = sequelize.define('exam', {
    StartingDate: DataTypes.DATE,
    EndingDate: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return exam;
};