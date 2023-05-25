const mongoose = require("mongoose");
const evaluationModel = require("../models/evaluation.model");
const studentModel = require("./student.model");

const submissionSchema = new mongoose.Schema(
  {
    evaluation_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: evaluationModel,
      required: true,
    },
    student_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: studentModel,
      required: true,
    },
    marks: { type: Number, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("submission", submissionSchema);
