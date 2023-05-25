const express = require("express");
const User = require("../models/user.model");
const Post = require("../models/post.model");
const Comment = require("../models/comment.model");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const post = await Post.create(req.body);

    res.status(201).json({
      post,
    });
  } catch (error) {
    res.status(500).json({
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
      posts,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();

    res.status(201).json({
      post,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id).lean().exec();

    res.status(201).json({
      message: "user Deleted",
      post,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).lean().exec();

    res.status(201).json({
      post,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

router.get("/:userId/posts", async (req, res) => {
  try {
    const posts = await Post.find({ userId: req.params.userId }).lean().exec();

    res.status(201).json({
      "posts cretaed by user": posts,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

router.get("/:postId/comments", async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.params.postId })
      .populate({
        path: "postId",
        select: { _id: 0, createdAt: 0, updatedAt: 0 },
        populate: {
          path: "userId",
          select: { _id: 0, createdAt: 0, updatedAt: 0, last_name: 0, city: 0 },
        },
      })
      .populate({
        path: "userId",
        select: { _id: 0, createdAt: 0, updatedAt: 0, last_name: 0, city: 0 },
      })
      .lean()
      .exec();

    res.status(201).json({
      "all the comments on this post": comments,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

module.exports = router;
