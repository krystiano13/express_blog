import { Router } from "express";
import {
  validateEmail,
  validateUsername,
  validatePassword,
} from "../validation/user_validation";
import { createUser } from "./endpoints/user_endpoints";

const user_router = Router();

user_router.post(
  "/api/auth/register",
  validateEmail,
  validatePassword,
  validateUsername,
  createUser
);

user_router.post("/api/auth/login");

user_router.post("/api/auth/logout");

user_router.get("/api/auth/status");

export { user_router };