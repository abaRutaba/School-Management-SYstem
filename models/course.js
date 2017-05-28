'use strict';
module.exports = function(sequelize, DataTypes) {
  var course = sequelize.define('course', {
    CourseName: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
          models.course.belongsTo(models.classes,{as:"classes",foreignkey:"classid"});

      }
    }
  });
  return course;
};