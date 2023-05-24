const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: false },
    city: { type: String, required: true },
    mobile: { type: Number, maxLength: 10, min: 1000000000, max: 9999999999 },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("user", userSchema);
