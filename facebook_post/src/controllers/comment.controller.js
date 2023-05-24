const express = require("express");
const Comment = require("../models/comment.model");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const comment = await Comment.create(req.body);

    res.status(201).json({
      status: "created",
      comment,
    });
  } catch (error) {
    res.status(401).json({
      error: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find()
      .populate({
        path: "userId",
        select: { _id: 0, createdAt: 0, updatedAt: 0, last_name: 0, mobile: 0 },
      })
      .populate({
        path: "postId",
        select: { _id: 0, createdAt: 0, updatedAt: 0 },
        populate: {
          path: "userId",
          select: {
            _id: 0,
            createdAt: 0,
            updatedAt: 0,
            last_name: 0,
            mobile: 0,
          },
        },
      })
      .lean()
      .exec();

    res.status(201).json({
      results: comments.length,
      comments,
    });
  } catch (error) {
    res.status(401).json({
      error: error.message,
    });
  }
});

module.exports = router;
