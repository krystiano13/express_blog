import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { BlogPost } from "../../db/schemas/blogPostSchema";

export async function getPosts(req: Request, res: Response) {
  const posts = await BlogPost.find({});
  res.status(200).send({ posts: posts });
}

export async function getPost(req: Request, res: Response) {
  const post = await BlogPost.findById(req.params.id);
  if (post) {
    res.status(200).send({ post: post });
  } else {
    res.status(404).send({ error: "Post not found" });
  }
}

export async function createPost(req: Request, res: Response) {
  const result = validationResult(req);

  if (!result.isEmpty()) {
    return res.status(400).send({ errors: result.array() });
  }

  const new_post = new BlogPost({
    title: req.body.title,
    content: req.body.content,
    date: new Date(),
  });

  try {
    new_post.save();
    res.status(200).send({ message: "Post created", post: new_post });
  } catch (e) {
    res.status(500).send({ error: "Internal Server Error" });
  }
}

export async function updatePost(req: Request, res: Response) {}

export async function deletePost(req: Request, res: Response) {}
