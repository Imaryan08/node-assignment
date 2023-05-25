const express = require("express");
const Submission = require("../models/submission.model");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const submission = await Submission.create(req.body);
    res.status(201).json({
      submission,
    });
  } catch (error) {
    res.status(401).json({
      error: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const submissions = await Submission.find()
      .populate({
        path: "evaluation_id",
        populate: [{ path: "instructor" }, { path: "batch_id" }],
      })
      .populate({ path: "student_id", populate: { path: "user" } })
      .lean()
      .exec();
    res.status(201).json({
      results: submissions.length,
      submissions,
    });
  } catch (error) {
    res.status(401).json({
      error: error.message,
    });
  }
});

// fetch all students who gave a particular evaluation

router.get("/evalid/:evalId", async (req, res) => {
  try {
    const students = await Submission.find({ evaluation_id: req.params.evalId })
      .select(["-createdAt", "-updatedAt", "-evaluation_id"])
      .populate({
        path: "student_id",
        select: { createdAt: 0, updatedAt: 0 },
        populate: { path: "user", select: { createdAt: 0, updatedAt: 0 } },
      })
      .lean()
      .exec();

    res.status(200).json({
      students,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fecth details",
      error: error.message,
    });
  }
});

// fetch the student with his personal details who scored the highest marks in the evaluation

router.get("/highestmarks", async (req, res) => {
  try {
    const submissions = await Submission.find()
      .sort({ marks: "-1" })
      .populate({
        path: "evaluation_id",
        populate: [{ path: "instructor" }, { path: "batch_id" }],
      })
      .populate({ path: "student_id", populate: { path: "user" } })
      .lean()
      .exec();
    res.status(201).json({
      results: submissions.length,
      submissions,
    });
  } catch (error) {
    res.status(401).json({
      error: error.message,
    });
  }
});
module.exports = router;
