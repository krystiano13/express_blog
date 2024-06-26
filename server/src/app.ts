import express from "express";
import mongoose from "mongoose";
import session from "express-session";
import passport from "passport";
import cookieParser from "cookie-parser";
import cors from "cors";
import "./auth/local_strategy";
import MongoStore from "connect-mongo";
import { user_router } from "./routes/user";
import { blogpost_router } from "./routes/blogPost";
import { comment_router } from "./routes/comment";

export function createApp() {
  const app = express();

  app.use(express.json());
  app.use(cookieParser());
  app.use(
    session({
      secret: process.env.SECRET || "keyboard cat",
      resave: false,
      saveUninitialized: true,
      cookie: { maxAge: 3600000 },
      store: MongoStore.create({
        //@ts-ignore
        client: mongoose.connection.getClient(),
      }),
    })
  );

  app.use(
    cors({
      origin: "http://localhost:4321",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      credentials: true,
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());
  app.use(passport.authenticate("session"));

  app.use(user_router);
  app.use(blogpost_router);
  app.use(comment_router);

  return app;
}
