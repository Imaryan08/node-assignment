const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const path = require("path");

const router = express.Router();

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hash = await bcrypt.hash(password, 10);

    const user = await User.create({
      name: name,
      email: email,
      password: hash,
    });
    return res.status(201).json({
      user,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email }).lean().exec();

    if (!user) {
      return res.status(404).json({ message: "email does not exist" });
    } else {
      // Check password
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res.status(404).json({ message: "Invalid password" });
      } else {
        const token = jwt.sign(
          { id: user._id, name: user.name, email: user.email },
          "secret"
        );
        console.log(token);
        res.status(200).json({ message: "Login successful", token });
      }
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const dashboard = (req, res) => {
  try {
    const filePath = path.join(__dirname, "../../dashboard.html");
    return res.status(200).sendFile(filePath);
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

module.exports = { register, login, dashboard };
