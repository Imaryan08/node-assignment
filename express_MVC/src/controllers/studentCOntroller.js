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

module.exports = student;
