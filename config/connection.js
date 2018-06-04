const pgp = require('pg-promise')();
const config = require('./dbConfig');//connect to db
const db = pgp(process.env.DATABASE_URL || config);

// console.log(db);

module.exports = db;
