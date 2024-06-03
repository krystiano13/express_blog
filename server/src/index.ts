import express from "express";
import mongoose from "mongoose";
import passport from "passport";
import session from "express-session";
import cookieParser from "cookie-parser";
import cors from "cors";

const PORT = process.env.PORT || 3000;

mongoose
  .connect("mongodb://localhost:27017/express_blog")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

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

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
