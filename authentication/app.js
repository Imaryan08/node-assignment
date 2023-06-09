const express = require("express");

const app = express();

// controllers
const userController = require("./src/controllers/user-controller");
const registerController = require("./src/controllers/register-controller");
const loginController = require("./src/controllers/login-controller");

app.use(express.json());
app.use("/users", userController);
app.use("/register", registerController);
app.use("/login", loginController);

module.exports = app;
