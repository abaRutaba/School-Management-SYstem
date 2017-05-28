'use strict';
module.exports = function(sequelize, DataTypes) {
  var student = sequelize.define('student', {
    RollNo: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
          models.student.belongsTo(models.section,{as:"section",foreignkey:"SecId"});
          models.student.belongsTo(models.user, {as:"User", foreignkey:"userId"});
      }
    }
  });
  return student;
};

