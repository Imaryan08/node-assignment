const express = require("express");
const User = require("../models/user-model");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res
        .status(400)
        .json({ message: "User does not exist with this email" });
    } else if (
      user.email === req.body.email &&
      user.password === req.body.password
    ) {
      return res.status(201).json({
        message: "user logged In successfully",
        user: user,
      });
    } else if (
      user.email === req.body.email &&
      user.password !== req.body.password
    ) {
      return res.status(201).json({
        message: "wrong password",
      });
    } else {
      return res.status(201).json({
        message: "wrong credentials!",
      });
    }
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
});

module.exports = router;
