import { Response, Request } from "express";
import { Comment } from "../../db/schemas/commentSchema";

export async function getComments(req: Request, res: Response) {
  const comments = await Comment.find({ post_id: req.params.post_id });

  return res.status(200).send({ comments: comments });
}

export async function createComment(req: Request, res: Response) { 
    
}