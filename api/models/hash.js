'use strict';

module.exports = function(sequelize, DataTypes) {
  var Hash = sequelize.define('Hash', {
    worker: { DataTypes.STRING },
    algo: { DataTypes.STRING },
    hashrate: { DataTypes.STRING }
  });

  return Hash;
};
