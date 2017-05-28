'use strict';
module.exports = function(sequelize, DataTypes) {
  var fee = sequelize.define('fee', {
    Ammount: DataTypes.INTEGER,
    Paid: DataTypes.STRING,
    Unpaid: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return fee;
};