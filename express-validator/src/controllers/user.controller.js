const express = require("express");
const User = require("../models/user.model");

const { check, validationResult } = require("express-validator");

const router = express.Router();

router.post(
  "/",
  check("first_name").not().isEmpty().withMessage("first_name cannot be empty"),
  check("last_name", "last name cannot be empty").not().isEmpty().optional(),
  check("email", "email cannot be empty")
    .not()
    .isEmpty()
    .isEmail()
    .withMessage("email should be in correct format"),
  check("pincode")
    .not()
    .isEmpty()
    .withMessage("pincode should not be empty")
    .isLength({ min: 6, max: 6 })
    .withMessage("pincode must be exactly 6 digits"),
  check("age")
    .not()
    .isEmpty()
    .withMessage("age cannot be empty")
    .isInt({ min: 1, max: 100 })
    .withMessage("age must be between 1 and 100"),

  check("gender")
    .not()
    .isEmpty()
    .withMessage("gender should be not empty")
    .custom((val) => {
      if (val != "Male" && val !== "Female") {
        throw new Error('Gender must be either "Male" or "female"');
      }
      return true;
    }),
  check("password").not().isEmpty().withMessage("password cannot be empty"),
  check("confirm_password")
    .not()
    .isEmpty()
    .withMessage("this field cannot be empty")
    .custom((val, { req }) => {
      if (val !== req.body.password) {
        throw new Error("password and confirm password do not match");
      }
      return true;
    }),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      
      if (errors.isEmpty()) {
        const user = await User.create(req.body);

        res.status(201).json({
          message: "User created",
          user: user,
        });
      } else {
        return res.status(400).json({
          error: errors.array(),
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Failed to create user",
        error: error.message,
      });
    }
  }
);

router.get("/", async (req, res) => {
  try {
    const users = await User.find().lean().exec();

    res.status(201).json({
      message: "Success",
      users: users,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create user",
      error: error.message,
    });
  }
});

module.exports = router;
