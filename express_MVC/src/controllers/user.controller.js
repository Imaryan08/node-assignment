const express = require("express");
const User = require("../models/user.model");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({
      user,
    });
  } catch (error) {
    res.status(401).json({
      error: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await User.find().lean().exec();
    res.status(201).json({
      users,
    });
  } catch (error) {
    res.status(401).json({
      error: error.message,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).lean().exec();
    res.status(201).json({
      user,
    });
  } catch (error) {
    res.status(401).json({
      error: error.message,
    });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    res.status(201).json({
      user,
    });
  } catch (error) {
    res.status(401).json({
      error: error.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id).lean().exec();
    res.status(200).json({
      user,
    });
  } catch (error) {
    res.status(401).json({
      error: error.message,
    });
  }
});

module.exports = router;
