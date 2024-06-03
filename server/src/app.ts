import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

export function createApp() {
  const app = express();

  app.use(express.json());
  app.use(cookieParser());

  app.use(
    cors({
      origin: "http://localhost:5173",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      credentials: true,
    })
  );

    return app;
}
