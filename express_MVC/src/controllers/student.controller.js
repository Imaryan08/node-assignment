const express = require("express");
const Student = require("../models/student.model");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json({
      student,
    });
  } catch (error) {
    res.status(401).json({
      error: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const students = await Student.find().populate("user").lean().exec();
    res.status(201).json({
      students,
    });
  } catch (error) {
    res.status(401).json({
      error: error.message,
    });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    res.status(201).json({
      message: "student details updated",
      student,
    });
  } catch (error) {
    res.status(401).json({
      message: "failed to update!",
      error: error.message,
    });
  }
});

module.exports = router;
