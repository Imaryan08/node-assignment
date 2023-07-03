const express = require("express");
const Event = require("../models/event.model");

const router = express.Router();

const event = async (req, res) => {
  try {

    const {event_name, location} = req.body;



  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};


module.exports = router;