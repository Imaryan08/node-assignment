const mongoose = require("mongoose");
const User = require("../models/user.model");
const Batch = require("../models/batch.model");

const evaluationSchema = new mongoose.Schema(
  {
    date_of_evaluation: { type: Date, required: true },
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
      required: true,
    },
    batch_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Batch,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("evaluation", evaluationSchema);
