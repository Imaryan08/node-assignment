const express = require("express");
const controller = require("./controllers/controller");

const app = express();

app.use("/books", controller);
app.use("/authors", controller);
app.use("/libraries", controller);

module.exports = app;
