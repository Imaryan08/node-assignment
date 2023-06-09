const express = require("express");

const User = require("../models/user-model");
const route = express.Router();

route.get("/", async (req, res) => {
  try {
    const users = await User.find().lean().exec();

    res.status(200).json({
      results: users.length,
      users: users,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to fecth the users",
      error: error.message,
    });
  }
});

module.exports = route;
