const sqlite3 = require("sqlite3");

const DBSOURCE = "db.sqlite";

const SQL_ITENS_CREATE = `
    CREATE TABLE users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT,
        birth TEXT,
        number TEXT
    )`;

const database = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    console.error(err.message);
    throw err;
  } else {
    console.log("db connected.");
    database.run(SQL_ITENS_CREATE, (err) => {
      if (err) {
      } else {
        console.log("db created");
      }
    });
  }
});

module.exports = database;
