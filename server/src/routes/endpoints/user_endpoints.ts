import { Request, Response } from "express";
import { User } from "../../db/schemas/userSchema";
import { validationResult } from "express-validator";

export async function createUser(
  req: Request<{}, {}, { username: string; email: string; password: string }>,
  res: Response
) {
  const find_user_email = await User.findOne({ email: req.body.email });
  const find_user_username = await User.findOne({
    username: req.body.username,
  });

  if (find_user_email || find_user_username) {
    return res.status(400).send({
      message: "User already exists",
    });
  }

  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).send({ errors: result.array() });
  }

  const new_user = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    role: "user",
  });

  try {
    new_user.save();
    return res.status(200).send({ message: "User created" });
  } catch (e) {
    return res.status(500).send({ error: "Internal Server Error" });
  }
}
