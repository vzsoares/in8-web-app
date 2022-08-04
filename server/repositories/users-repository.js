const database = require("./database");

const itensRepository = {
  post: (user, callback) => {
    const sql =
      "INSERT INTO users (name, email, birth, number) VALUES (?, ?, ?, ?)";
    const params = [user.name, user.email, user.birth, user.number];
    database.run(sql, params, function (_err) {
      callback(this?.lastID);
    });
  },

  readAll: (callback) => {
    const sql = "SELECT * FROM users";
    const params = [];
    database.all(sql, params, (_err, rows) => callback(rows));
  },
};
module.exports = itensRepository;
