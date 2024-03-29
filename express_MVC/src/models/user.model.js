const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: false },
    gender: {
      type: String,
      required: false,
      enum: ["male", "female"],
      default: "male",
    },
    date_of_birth: {
      type: Date,
      required: false,
    },
    user_type: {
      type: String,
      enum: ["student", "admin", "instructor"],
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
