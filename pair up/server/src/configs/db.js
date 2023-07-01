const mongoose = require("mongoose");

const connect = () => {
  return mongoose
    .connect("mongodb://localhost:27017/pair-up", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database connection established");
    })
    .catch((error) => {
      console.error("Database connection failed:", error);
      throw error;
    });
};

module.exports = connect;
