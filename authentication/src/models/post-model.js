const mongoose = require("mongoose");
const User = require("./user-model");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    requried: true,
  },
});

module.exports = mongoose.model("post", postSchema);
