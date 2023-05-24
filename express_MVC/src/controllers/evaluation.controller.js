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
    const evaluations = await Evaluation.find().lean().exec();
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
