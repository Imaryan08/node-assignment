const express = require("express");

//* controller

const userController = require("./controllers/user.controller");
const postController = require("./controllers/post.controller");
const commentController = require("./controllers/comment.controller");

const app = express();
app.use(express.json());

app.use("/users", userController);
app.use("/posts", postController);
app.use("/comments", commentController);

module.exports = app;
