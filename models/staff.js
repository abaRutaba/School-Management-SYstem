'use strict';
module.exports = function(sequelize, DataTypes) {
  var staff = sequelize.define('staff', {
    Salary: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
          models.staff.belongsTo(models.user, {as:"User", foreignkey:"userId"});

      }
    }
  });
  return staff;
};