import { Router } from "express";
import {
  getPost,
  getPosts,
  deletePost,
  createPost,
  updatePost,
} from "./endpoints/blogpost_endpoints";

const router = Router();

router.get("/api/posts", getPosts);
router.get("/api/posts/:id", getPost);
router.post("/api/posts", createPost);
router.patch("/api/posts/:id", updatePost);
router.delete("/api/posts/:id", deletePost);

export { router as blogpost_router };
