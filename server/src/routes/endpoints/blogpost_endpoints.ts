import { Request, Response } from "express";
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
  return res.sendStatus(200);
}

export async function updatePost(req: Request, res: Response) {}

export async function deletePost(req: Request, res: Response) {}
