const sequelize = new Sequelize('block_api', 'block_api', 'swagger9000', {
  host: 'mariamicro.cg7ucsq2kyal.eu-west-2.rds.amazonaws.com:3306',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

  // SQLite only
  storage: 'path/to/database.sqlite'
});
