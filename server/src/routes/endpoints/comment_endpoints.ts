import { Response, Request } from "express";
import { Comment } from "../../db/schemas/commentSchema";
import { validationResult } from "express-validator";
import type { Session } from "express-session";
import type { User } from "../../types/auth";

export async function getComments(req: Request, res: Response) {
  const comments = await Comment.find({ post_id: req.params.post_id });

  return res.status(200).send({ comments: comments });
}

export async function createComment(req: Request, res: Response) {
  const result = validationResult(req);

  if (!result.isEmpty())
    return res.status(400).send({ errors: result.array() });

  const session: Session & Partial<{ passport: { user: User } }> = req.session;

  const new_comment = new Comment({
    text: req.body.text,
    author: session.passport?.user.username,
    post_id: req.params.post_id,
    date: new Date(),
  });

  try {
    new_comment.save();
    return res
      .status(200)
      .send({ message: "Comment created", comment: new_comment });
  } catch (e) {
    return res.status(500).send({ error: "Internal Server Error" });
  }
}
