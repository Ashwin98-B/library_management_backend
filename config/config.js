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
    "username": "b7d02c48a373e9",
    "password": "9c5709ab",
    "database": "heroku_7e291fbbc690abd",
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