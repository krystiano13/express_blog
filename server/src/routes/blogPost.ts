import { Router } from "express";
import multer from "multer";
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
import { notLoggedIn, isAdmin } from "../middleware/user";

const router = Router();
const upload = multer({ dest: "../../../uploads/" });

router.get("/api/posts", getPosts);
router.get("/api/posts/:id", getPost);
router.post(
  "/api/posts",
  notLoggedIn,
  isAdmin,
  validateTitle,
  validateContent,
  validateDate,
  upload.single("image"),
  createPost,
);
router.put(
  "/api/posts/:id",
  notLoggedIn,
  isAdmin,
  validateTitle,
  validateContent,
  validateDate,
  updatePost
);
router.delete("/api/posts/:id", notLoggedIn, isAdmin, deletePost);

export { router as blogpost_router };
