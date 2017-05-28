'use strict';
module.exports = function(sequelize, DataTypes) {
  var administrator = sequelize.define('administrator', {
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
          models.administrator.belongsTo(models.user, {as:"User", foreignkey:"userId"});
      }
    }
  });
  return administrator;
};