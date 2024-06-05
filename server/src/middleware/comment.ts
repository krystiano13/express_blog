import { Request, Response, NextFunction } from "express";

export function checkPostID(req: Request, res: Response, next: NextFunction) {
  if (!req.params.post_id) {
    return res.status(404).send({ error: "Post ID not found" });
  }

  next();
}

export function checkCommentID(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!req.params.id) {
    return res.status(404).send({ error: "Comment ID not found" });
  }

  next();
}
