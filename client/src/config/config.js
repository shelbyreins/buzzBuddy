// require('dotenv').config();

//  module.exports = {
//   "development": {
//     "username": process.env.MYSQL_USER,
//     "password": process.env.MYSQL_KEY,
//     "database": process.env.MYSQL_DBNAME,
//     "host": process.env.MYSQL_HOST,
//     "dialect": "mysql"
//   },
//   "test": {
//     "username": "root",
//     "password": null,
//     "database": "database_test",
//     "host": "127.0.0.1",
//     "dialect": "mysql",
//   },
//   "production": {
//     "use_env_variable": "JAWSDB_URL",
//     "dialect": "mysql"
//   }
// }
  
const config = {
  BASE_URL: process.env.BASE_URL || 'http://0.0.0.0:9001',
  PORT: process.env.PORT || 9001,
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://mongo:27017/calendar'
};

module.exports = config;