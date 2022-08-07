import express from "express";
import userRepository from "../repositories/users-repository";

import { User } from "../../src/models/User";

const usersRouter = express.Router();

// post
usersRouter.post("/users", (req, res) => {
  const user: User = req.body;
  userRepository.post(user, (id) => {
    if (id) {
      res.status(201).location(`/itens/${id}`).send();
    } else {
      res.status(400).send("error");
    }
  });
});

// get all
usersRouter.get("/users", (req, res) => {
  userRepository.readAll((itens: User[]) => res.json(itens));
});

export default usersRouter;
