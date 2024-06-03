import mongoose from "mongoose";
import { createApp } from "./app";

const PORT = process.env.PORT || 4321;

const app = createApp();

mongoose
  .connect("mongodb://localhost:27017/express_blog")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
