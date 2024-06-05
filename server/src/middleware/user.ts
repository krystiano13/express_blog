import { Request, Response, NextFunction } from "express";
import type { User } from "../types/auth";
import type { Session } from "express-session";

export function notLoggedIn(req: Request, res: Response, next: NextFunction) {
  const { session }: { session: Session & Partial<{ passport: User }> } = req;

  if (!session.passport) {
    res.status(403);
    return res.send({ error: "Unauthorized" });
  } else {
    next();
  }
}

export function loggedIn(req: Request, res: Response, next: NextFunction) {
  const { session }: { session: Session & Partial<{ passport: User }> } = req;

  if (session.passport) {
    res.status(401);
    return res.send({ error: "You can't be logged in to do that" });
  } else {
    next();
  }
}

export function isAdmin(req: Request, res: Response, next: NextFunction) {
  const {
    session,
  }: { session: Session & Partial<{ passport: { user: User } }> } = req;

  if (session.passport) {
    if (session.passport.user.role !== "admin") {
      res.status(403);
      return res.send({ error: "Unauthorized" });
    }
  }

  next();
}
