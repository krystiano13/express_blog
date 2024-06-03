import { User } from "../schemas/userSchema";

export async function seedAdmin() {
  const findAdmin = await User.findOne({ role: "admin" });

  if (!findAdmin) {
    const admin = new User({
      username: "Crystiano1210",
      email: "crystianotv@gmail.com",
      password: process.env.PASSWORD || "password",
      role: "admin",
    });

    try {
      admin.save();
      console.log("Admin seeded");
    } catch (e) {
      console.log(e);
    }
  } else {
    console.log("Admin already seeded");
  }
}
