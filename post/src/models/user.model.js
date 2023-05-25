const mongoogse = require("mongoose");

const userSchema = new mongoogse.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: false },
    city: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoogse.model("user", userSchema);
