const express = require("express");
const Evaluation = require("../models/evaluation.model");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const evaluation = await Evaluation.create(req.body);
    res.status(201).json({
      evaluation,
    });
  } catch (error) {
    res.status(401).json({
      error: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const evaluations = await Evaluation.find()
      .select("-createdAt -updatedAt")
      .populate({
        path: "instructor",
        select: {
          // _id: 0,
          gender: 0,
          date_of_birth: 0,
          createdAt: 0,
          updatedAt: 0,
        },
      })
      .populate({
        path: "batch_id",
        select: { createdAt: 0, updatedAt: 0 },
      })
      .lean()
      .exec();
    res.status(200).json({
      evaluations,
    });
  } catch (error) {
    res.status(401).json({
      error: error.message,
    });
  }
});

module.exports = router;
