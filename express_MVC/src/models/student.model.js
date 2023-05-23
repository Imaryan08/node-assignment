const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    roll_id: { type: Number, reuired: true },
    current_batch: {
      anyOf: [{ type: String }, { type: Number }],
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("student", studentSchema);
