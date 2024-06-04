import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  text: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  date: {
    type: mongoose.Schema.Types.Date,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  post_id: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
});

export const Comment = mongoose.model("Comment", commentSchema);
