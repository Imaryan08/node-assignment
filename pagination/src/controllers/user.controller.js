const express = require("express");
const User = require("../models/user.model");
const transporter = require("../configs/mail");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const page = req.query.page || 0;
    const pagesize = req.query.pagesize || 0;

    const skip = (page - 1) * pagesize || 0;

    const users = await User.find().skip(skip).limit(pagesize).lean().exec();

    res.status(200).json({
      results: users.length,
      users,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to getch users",
      error: error.message,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    const email = req.body.email;

    var mailOptions = {
      from: "aryansmtp@gmail.com",
      to: `${email}`,
      subject: `Welcome to our system ${req.body.first_name} ${req.body.last_name}`,
      text: `Hi ${req.body.first_name}, Please confirm your email address`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    //send mail to all the admins
    transporter.sendMail(
      {
        from: "aryansmtp@gmail.com",
        to: "rampukaryadav073@gmail.com,aryansmtp@gmail.com,yadavaryan124@gmail.com,imaryan08@gmail.com",
        subject: `${req.body.first_name} ${req.body.last_name} has registered with us`,
        text: `Please welcome ${req.body.first_name}`,
      },

      function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      }
    );

    res.status(200).json({
      message: "user created",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create user",
      error: error.message,
    });
  }
});

module.exports = router;
