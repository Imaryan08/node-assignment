const mongoose = require("mongoose");
const User = require("./user.model");
const Post = require("./post.model");

const commentSchema = new mongoose.Schema(
  {
    comment: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: User, required: true },
    postId: { type: mongoose.Schema.Types.ObjectId, ref: Post, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("comment", commentSchema);
