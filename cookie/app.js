const express = require("express");

const cookieParser = require("cookie-parser");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to backend!");
});

app.get("/setcookie", (req, res) => {
  res.cookie("mycookie", "cookie Value");
  res.status(200).send("cookie has been set!");
});

app.listen(8080, () => {
  console.log("server listening on 8080");
});
