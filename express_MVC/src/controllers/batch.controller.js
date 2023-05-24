const express = require("express");
const Batch = require("../models/batch.model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const batches = await Batch.find().lean().exec();
    res.status(200).json({
      batches,
    });
  } catch (error) {
    res.status(401).json({
      error: error.message,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const batch = await Batch.create(req.body);
    res.status(201).json({
      batch,
    });
  } catch (error) {
    res.status(401).json({
      error: error.message,
    });
  }
});

module.exports = router;
