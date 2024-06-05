import { Router } from "express";

const router = Router();

router.get("/api/comments/:post_id");
router.post("/api/comments/:post_id");
router.patch("/api/comments/:post_id/:id");
router.delete("/api/comments/:post_id/:id");

export { router as comment_router };
