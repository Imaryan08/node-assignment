const mongoose = require("mongoose");

const dbURL = "mongodb://127.0.0.1:27017/express-validation";

module.exports = async () => {
  try {
    await mongoose.connect(dbURL);
    console.log("Database connected successfully");
  } catch (err) {
    console.log(err);
  }
};
