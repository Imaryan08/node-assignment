const mongoogse = require("mongoose");
const User = require("./user.model");
const Post = require("./post.model");

const commentSchema = new mongoogse.Schema(
  {
    comment: { type: String, required: true },
    postId: {
      type: mongoogse.Schema.Types.ObjectId,
      ref: Post,
      required: true,
    },
    userId: {
      type: mongoogse.Schema.Types.ObjectId,
      ref: User,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoogse.model("comment", commentSchema);
