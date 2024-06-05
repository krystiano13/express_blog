import { Router } from "express";

//middleware
import { checkPostID, checkCommentID } from "../middleware/comment";

//endpoints
import { notLoggedIn } from "../middleware/user";
import { getComments } from "./endpoints/comment_endpoints";

const router = Router();

router.get("/api/comments/:post_id", notLoggedIn, checkPostID, getComments);
router.post("/api/comments/:post_id", notLoggedIn, checkPostID);
router.patch(
  "/api/comments/:post_id/:id",
  notLoggedIn,
  checkPostID,
  checkCommentID
);
router.delete(
  "/api/comments/:post_id/:id",
  notLoggedIn,
  checkPostID,
  checkCommentID
);

export { router as comment_router };
