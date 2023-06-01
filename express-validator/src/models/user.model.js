const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: false,
    },
    gender: {
      type: String,
      // enum: ["Male", "Female"],
      enum: {
        values: ["Male", "Female"],
        message: `{VALUE} not supported. This field accpets only two values. i.e. Male and Female`,
      },
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      // minLength: 4,
      minLength: [4, "Must be 4 chracters long!"],
    },
    confirm_password: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
