'use strict';
module.exports = function(sequelize, DataTypes) {
  var section = sequelize.define('section', {
    SectionName: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
          models.section.belongsTo(models.classes,{as:"classes",foreignkey:"classId"});

      }
    }
  });
  return section;
};