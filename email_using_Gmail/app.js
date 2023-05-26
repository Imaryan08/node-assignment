const nodemailer = require("nodemailer");

//! In this methos object is passed directly as an argument and callback function is not passed for checking error.success

// const client = nodemailer.createTransport({
//   service: "Gmail",
//   auth: {
//     user: "aryansmtp@gmail.com",
//     pass: "kazjgbgofuuexjru",
//   },
// });

// client.sendMail({
//   from: "aryan yadav",
//   to: "imaryan08@gmail.com",
//   subject: "Sending it from Gmail",
//   text: "Hey, I'm being sent from the cloud",
// });

//? another way

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "aryansmtp@gmail.com",
    pass: "kazjgbgofuuexjru",
  },
});

var mailOptions = {
  from: "aryansmtp@gmail.com",
  to: "imaryan08@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
