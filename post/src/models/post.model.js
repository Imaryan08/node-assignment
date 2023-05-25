const mongoogse = require("mongoose");
const User = require("./user.model");

const postSchema = new mongoogse.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: false },
    userId: { type: mongoogse.Schema.Types.ObjectId, ref: User },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoogse.model("post", postSchema);
