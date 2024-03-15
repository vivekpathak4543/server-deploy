const express = require("express");
require("dotenv").config();

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(process.env.PORT, () => {
  console.log(`server is listening on port:${port}`);
});
