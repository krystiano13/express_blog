import mongoose from "mongoose";
import { createApp } from "./app";
import { seedAdmin } from "./db/seeds/adminSeed";

const PORT = process.env.PORT || 3000;

mongoose
  .connect("mongodb://localhost:27017/express_blog")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

const app = createApp();

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

seedAdmin();
