const express = require("express");
const Post = require("../models/post.model");
const Comment = require("../models/comment.model");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const post = await Post.create(req.body);

    res.status(201).json({
      status: "created",
      post,
    });
  } catch (error) {
    res.status(401).json({
      error: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find()
      .populate({
        path: "userId",
        select: { _id: 0, createdAt: 0, updatedAt: 0 },
      })
      .lean()
      .exec();

    res.status(201).json({
      results: posts.length,
      posts,
    });
  } catch (error) {
    res.status(401).json({
      error: error.message,
    });
  }
});

// Get all the comments of post
//* posts/postId/comments

router.get("/:postId/comments", async (req, res) => {
  try {
    const posts = await Comment.find({ postId: req.params.postId })
      .lean()
      .exec();

    res.status(201).json({
      "comments on this posts": posts,
    });
  } catch (error) {
    res.status(401).json({
      error: error.message,
    });
  }
});

module.exports = router;
