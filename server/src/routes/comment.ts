import { Router } from "express";
import { notLoggedIn } from "../middleware/user";
import { getComments } from "./endpoints/comment_endpoints";

const router = Router();

router.get("/api/comments/:post_id", notLoggedIn, getComments);
router.post("/api/comments/:post_id");
router.patch("/api/comments/:post_id/:id");
router.delete("/api/comments/:post_id/:id");

export { router as comment_router };
