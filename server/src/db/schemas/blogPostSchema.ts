import mongoose from "mongoose";

const blogPostSchema = new mongoose.Schema({
  title: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  content: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  date: {
    type: mongoose.Schema.Types.Date,
    required: true,
  },
  imagePath: {
    type: mongoose.Schema.Types.String,
    required: false,
  },
});

export const BlogPost = mongoose.model("BlogPost", blogPostSchema);
