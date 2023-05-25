const express = require("express");
const User = require("../models/user.model");
const Post = require("../models/post.model");
const Comment = require("../models/comment.model");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const comment = await Comment.create(req.body);

    res.status(201).json({
      comment,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find()
      .populate({
        path: "userId",
        select: { _id: 0, createdAt: 0, updatedAt: 0, last_name: 0, city: 0 },
      })
      .populate({
        path: "postId",
        select: { _id: 0, createdAt: 0, updatedAt: 0 },

        populate: {
          path: "userId",
          select: { _id: 0, createdAt: 0, updatedAt: 0, last_name: 0, city: 0 },
        },
      })
      .lean()
      .exec();

    res.status(201).json({
      comments,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();

    res.status(201).json({
      comment,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id)
      .lean()
      .exec();

    res.status(201).json({
      message: "comment Deleted",
      comment,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id).lean().exec();

    res.status(201).json({
      comment,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

module.exports = router;
