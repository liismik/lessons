const { Schema, model } = require('mongoose')

const postSchema = new Schema({
  title: { type: String, required: true },
  authorId: { type: String, required: true },
  lastModified: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now }
});

const Post = model("Post", postSchema)

module.exports = Post