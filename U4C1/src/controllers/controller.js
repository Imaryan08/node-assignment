const express = require("express");
const logger = require("../middlewares/logger");
const checkPermission = require("../middlewares/checkPermission");

const router = express.Router();

router.get("/", logger, checkPermission, (req, res) => {
  try {
    res.status(200).json({
      route: req.baseUrl,
      permission: req.permission,
    });
  } catch (error) {
    res.status(401).json({
      error: error.message,
    });
  }
});

module.exports = router;
