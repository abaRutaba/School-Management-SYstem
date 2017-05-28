'use strict';
module.exports = function(sequelize, DataTypes) {
  var schoolaccount = sequelize.define('schoolaccount', {
    AccountNo: DataTypes.INTEGER,
    AccountTitle: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
          models.schoolaccount.belongsTo(models.campus,{as:"campus",foreignkey:"campusid"});
      }
    }
  });
  return schoolaccount;
};