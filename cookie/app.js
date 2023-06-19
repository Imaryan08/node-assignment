const express = require("express");

const cookieParser = require("cookie-parser");

const app = express();

app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Welcome to backend!");
});

// Set ccokie value
app.get("/setcookie", (req, res) => {
  res.cookie("mycookie", "cookie Value");
  res.status(200).send("cookie has been set!");
});

// Read cookie value
app.get("/getcookie", (req, res) => {
  const myCookie = req.cookies.mycookie;
  console.log(myCookie);
  res.send("cookie read successfully");
});

// Delte cookie
app.get("/delcookie", (req, res) => {
  res.clearCookie();
  res.send("cookie has been deleted successfully");
});

app.listen(8080, () => {
  console.log("server listening on 8080");
});
