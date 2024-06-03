import { Router } from "express";
import {
  validateEmail,
  validateUsername,
  validatePassword,
} from "../validation/user_validation";
import { createUser, logIn, logOut, status } from "./endpoints/user_endpoints";
import passport from "passport";

const user_router = Router();

user_router.post(
  "/api/auth/register",
  validateEmail,
  validatePassword,
  validateUsername,
  createUser
);

user_router.post("/api/auth/login", passport.authenticate("local"), logIn);

user_router.post("/api/auth/logout", logOut);

user_router.get("/api/auth/status", status);

export { user_router };
