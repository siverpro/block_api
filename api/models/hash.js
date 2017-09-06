const Hash = sequelize.define('hash', {
  worker: {
    type: Sequelize.STRING
  },
  algo: {
    type: Sequelize.STRING
  },
  hashrate: {
    type: Sequelize.STRING
  }
});
