import { Request, Response, NextFunction } from "express";

export function checkPostID(req: Request, res: Response, next: NextFunction) {
  if (!req.params.post_id) {
    res.status(404);
    return res.send({ error: "Post ID not found" });
  }

  next();
}

export function checkCommentID(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!req.params.id) {
    res.status(404);
    return res.send({ error: "Comment ID not found" });
  }

  next();
}
