const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    roll_id: { type: Number, required: true },
    current_batch: {
      type: String,
      //   anyOf: [{ type: String }, { type: Number }],
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("student", studentSchema);
