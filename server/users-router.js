const express = require("express");
const userRepository = require("./repositories/users-repository.js");

const usersRouter = express.Router();

// post
usersRouter.post("/users", (req, res) => {
  const user = req.body;
  console.log(user);
  // TODO fix user
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
  userRepository.readAll((itens) => res.json(itens));
});

module.exports = usersRouter;
