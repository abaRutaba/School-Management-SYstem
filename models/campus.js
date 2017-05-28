'use strict';
module.exports = function(sequelize, DataTypes) {
  var campus = sequelize.define('campus', {
    PhoneNo: DataTypes.INTEGER,
    Address: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return campus;
};