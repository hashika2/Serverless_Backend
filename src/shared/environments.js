const environment = require( './environments/env.json');

 const dataBaseEnv = {
  user: environment.database.user,
  password: environment.database.password,
  host: environment.database.host,
  database: environment.database.database,
  port: environment.database.port
};

module.exports = dataBaseEnv;