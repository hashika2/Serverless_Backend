const Sequelize = require("sequelize");
const databaseEnv = require("../../environments");
const userEntity = require("./userEntity");

const sequelize = new Sequelize(
  databaseEnv.database,
  databaseEnv.user,
  databaseEnv.password,
  {
    dialect: 'mysql',
    dialectOptions: {
      supportBigNumbers: true,
      decimalNumbers: true
    },
    host: databaseEnv.host,
    port: databaseEnv.port,
    logging: console.log,
    define: {
      timestamps: false,
    },
  }
);

const User = userEntity(sequelize, Sequelize);
module.exports = { User };
