const express = require("express");
const cors = require("cors");

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send(JSON.stringify({ name: "Hello World!" }));
});

app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
