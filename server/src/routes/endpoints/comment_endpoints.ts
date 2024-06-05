import { Response, Request } from "express";
import { Comment } from "../../db/schemas/commentSchema";

export async function getComments(req: Request, res: Response) {
  if (!req.params.post_id)
    return res.status(404).send({ error: "Post ID not found" });

  const comments = await Comment.find({ post_id: req.params.post_id });

  return res.status(200).send({ comments: comments });
}
