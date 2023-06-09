const express = require("express");
const { check, validationResult, body } = require("express-validator");
const User = require("../models/user-model");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    console.log(body());
    let user = await User.findOne({ email: req.body.email });

    if (user) {
      return res.status(409).json({
        error: "User already registered",
      });
    }

    user = await User.create(req.body);

    return res.status(201).json({
      message: "User is registered",
      user: user,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
});

module.exports = router;

/*

heroku create

git push heroku master


*/