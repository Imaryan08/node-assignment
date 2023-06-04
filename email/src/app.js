const express = require("express");
const path = require("path");
const emailController = require("./controllers/emailControllers");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "views")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/send-email", emailController.sendEmail);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
