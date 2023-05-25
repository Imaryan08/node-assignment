const mongoose = require("mongoose");

const User = require("../models/user.model");

const studentSchema = new mongoose.Schema(
  {
    roll_id: { type: Number, required: true },
    current_batch: {
      type: String,
      //   anyOf: [{ type: String }, { type: Number }],
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("student", studentSchema);
