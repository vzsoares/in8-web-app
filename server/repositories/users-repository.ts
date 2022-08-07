import database from "./database";

import { User } from "../../src/models/User";

const itensRepository = {
  post: (user: User, callback: (id?: number) => void) => {
    const sql =
      "INSERT INTO users (name, email, birth, number) VALUES (?, ?, ?, ?)";
    const params = [user.name, user.email, user.birth, user.number];
    database.run(sql, params, function (_err) {
      callback(this?.lastID);
    });
  },

  readAll: (callback: (itens: User[]) => void) => {
    const sql = "SELECT * FROM users";
    const params: any[] = [];
    database.all(sql, params, (_err, rows) => callback(rows));
  },
};

export default itensRepository;
