const express = require("express");
const {
  register,
  login,
  dashboard,
} = require("./src/controllers/user.controller");

const authenticateToken = require("./src/middlwares/authenticateToken");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/register", register);
app.post("/login", login);
app.get("/dashboard", authenticateToken, dashboard);
module.exports = app;
