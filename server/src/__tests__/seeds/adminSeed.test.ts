import { seedAdmin } from "../../db/seeds/adminSeed";
import mongoose from "mongoose";
import { User } from "../../db/schemas/userSchema";

describe("Admin Seed", () => {
  beforeAll(() => {
    mongoose
      .connect("mongodb://localhost:27017/express_blog_test1")
      .then(() => console.log("Connected to MongoDB"));
  });

  it("should seed admin", async () => {
    await seedAdmin();
    const findAdmin = await User.findOne({ role: "admin" });
    expect(findAdmin).toBeTruthy();
  });

  afterAll(() => {
    mongoose.connection.dropDatabase();
    mongoose.connection.close();
  });
});
