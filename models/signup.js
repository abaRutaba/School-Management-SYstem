'use strict';
module.exports = function(sequelize, DataTypes) {
  var signup = sequelize.define('signup', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return signup;
};