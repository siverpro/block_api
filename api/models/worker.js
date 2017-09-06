'use strict';

moule.exports = function(sequelize, DataTypes) {
  var Worker = sequelize.define("Worker", {
    workername: DataTypes.STRING
  });

  Worker.associate = function(models) {
    Worker.hasMany(models.Hash);
  }

  return Worker;

};
