const express = require("express");
const User = require("../models/user.model");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(201).json({
      message: "User created",
      user: user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create user",
      error: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await User.find().lean().exec();

    res.status(201).json({
      message: "Success",
      users: users,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create user",
      error: error.message,
    });
  }
});

module.exports = router;
