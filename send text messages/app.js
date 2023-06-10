const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
// const Nexmo = require("nexmo");
const { Vonage } = require("@vonage/server-sdk");

const socketio = require("socket.io");

//Init Nexmo
// const Nexmo = new Nexmo({
//     apiKey: "",
//     apiSecret: "",
// },{debug: true});

const vonage = new Vonage({
  apiKey: "8c642b7b",
  apiSecret: "4mcwYVkmcG1qs8yo",
});

//Init app
const app = express();

//Template engine setup
app.set("view engine", "html");
app.engine("html", ejs.renderFile);

//Public folder setup
app.use(express.static(__dirname + "/public"));

//Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Index route
app.get("/", async (req, res) => {
  res.render("index");
});

//Catch form submit
app.post("/", async (req, res) => {
  const to = req.body.number;
  const text = req.body.text;

  const from = "Vonage APIs";
  //   const to = "919643579827";
  //   const text = "A text message sent using the Vonage SMS API";

  await vonage.sms
    .send({ to, from, text })
    .then((resp) => {
      console.log("Message sent successfully");
      console.log(resp);
    })
    .catch((err) => {
      console.log("There was an error sending the messages.");
      console.error(err);
    });
});

// Define port
const port = 3000;

//Start server
const server = app.listen(port, console.log(`server running on port ${port}`));
