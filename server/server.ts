import express from "express";
// const express = require("express");
import cors from "cors";
// const cors = require("cors");
import usersRouter from "./routers/users-router";
// const usersRouter = require("./routers/users-router");

const app = express();
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(JSON.stringify({ name: "Hello World!" }));
});

app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

app.use("/api", usersRouter);

app.use((req, res) => {
  res.status(404);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
