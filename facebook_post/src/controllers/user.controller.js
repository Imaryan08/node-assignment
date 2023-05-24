const express = require("express");
const User = require("../models/user.model");
const Post = require("../models/post.model");
const Comment = require("../models/comment.model");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(201).json({
      status: "created",
      user,
    });
  } catch (error) {
    res.status(401).json({
      error: error.message,
    });
  }
});

router.get("/:userid", async (req, res) => {
  console.log(req.params.userid);
  try {
    const user = await User.findById(req.params.userid).lean().exec();
    res.status(200).json({
      user,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// get all the posts created by particular user

router.get("/:userid/posts", async (req, res) => {
  try {
    const posts = await Post.find({ userId: req.params.userid });

    res.status(200).json({
      posts,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// get all the comments by particular user

router.get("/:userid/comments", async (req, res) => {
  try {
    const comments = await Comment.find({ userId: req.params.userid })
      .populate("userId")
      .populate("postId");

    res.status(200).json({
      comments,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await User.find().lean().exec();

    res.status(201).json({
      users: users,
    });
  } catch (error) {
    res.status(401).json({
      error: error.message,
    });
  }
});

module.exports = router;
