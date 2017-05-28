'use strict';
module.exports = function(sequelize, DataTypes) {
  var Teacher = sequelize.define('Teacher', {
    Salary: DataTypes.INTEGER,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
          models.Teacher.belongsTo(models.user, {as:"User", foreignkey:"userId"});
      }
    }
  });
  return Teacher;
};