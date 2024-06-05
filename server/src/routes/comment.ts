import { Router } from "express";
import { validateText } from "../validation/comment_validation";

//middleware
import { checkPostID, checkCommentID } from "../middleware/comment";

//endpoints
import { notLoggedIn } from "../middleware/user";
import {
  getComments,
  createComment,
  updateComment,
} from "./endpoints/comment_endpoints";

const router = Router();

router.get("/api/comments/:post_id", notLoggedIn, checkPostID, getComments);
router.post(
  "/api/comments/:post_id",
  notLoggedIn,
  checkPostID,
  validateText,
  createComment
);
router.patch(
  "/api/comments/:post_id/:id",
  notLoggedIn,
  checkPostID,
  checkCommentID,
  validateText,
  updateComment
);
router.delete(
  "/api/comments/:post_id/:id",
  notLoggedIn,
  checkPostID,
  checkCommentID
);

export { router as comment_router };
