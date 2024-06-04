import { Router } from "express";
import {
  getPost,
  getPosts,
  deletePost,
  createPost,
  updatePost,
} from "./endpoints/blogpost_endpoints";
import {
  validateContent,
  validateDate,
  validateTitle,
} from "../validation/blogpost_validation";
import { loggedIn } from "../middleware/user";

const router = Router();

router.get("/api/posts", getPosts);
router.get("/api/posts/:id", getPost);
router.post(
  "/api/posts",
  loggedIn,
  validateTitle,
  validateContent,
  validateDate,
  createPost
);
router.put(
  "/api/posts/:id",
  loggedIn,
  validateTitle,
  validateContent,
  validateDate,
  updatePost
);
router.delete("/api/posts/:id", loggedIn, deletePost);

export { router as blogpost_router };
