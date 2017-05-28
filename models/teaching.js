'use strict';
module.exports = function(sequelize, DataTypes) {
  var teaching = sequelize.define('teaching', {

  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
          models.teaching.belongsTo(models.Teacher,{as:"teacher",foreignkey:"teacherid"});
          models.teaching.belongsTo(models.section,{as:"section",foreignkey:"sectionid"});
          models.teaching.belongsTo(models.course, {as:"course",foreignkey:"courseid"});

      }
    }
  });
  return teaching;
};