require('dotenv').config()
module.exports = {
  "local": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": "mysql",
    "logging" : false
  },
  "development": {
    "username": "b3c6ef8c8231df",
    "password": "ad570af6",
    "database": "heroku_1fab3d714c66fd8",
    "host": "us-cdbr-iron-east-04.cleardb.net",
    "dialect": "mysql",
    "logging" : false

  },
  "staging": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": "mysql",
    "logging" : false

  },
  "production": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": "mysql",
    "logging" : false

  }
}