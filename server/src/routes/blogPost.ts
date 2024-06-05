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
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.get("/api/posts", getPosts);
router.get("/api/posts/:id", getPost);
router.post(
  "/api/posts",
  notLoggedIn,
  isAdmin,
  validateTitle,
  validateContent,
  upload.single("image"),
  createPost
);
router.put(
  "/api/posts/:id",
  notLoggedIn,
  isAdmin,
  validateTitle,
  validateContent,
  validateDate,
  upload.single("image"),
  updatePost
);
router.delete("/api/posts/:id", notLoggedIn, isAdmin, deletePost);

export { router as blogpost_router };
