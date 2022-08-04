const express = require("express");
const cors = require("cors");
const usersRouter = require("./users-router");

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

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
