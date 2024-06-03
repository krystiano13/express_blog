import { Request, Response } from "express";
import { User } from "../../db/schemas/userSchema";
import { validationResult } from "express-validator";
import { hashPassword } from "../../auth/hash";

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
    password: hashPassword(req.body.password),
    role: "user",
  });

  try {
    new_user.save();
    return res.status(200).send({ message: "User created" });
  } catch (e) {
    return res.status(500).send({ error: "Internal Server Error" });
  }
}

export async function logIn(req: Request, res: Response) {
  return res.status(200).send({ message: "Logged In Successfully" });
}

export async function logOut(req: Request, res: Response) {
  req.logout(function (err) {
    if (err) {
      return res.status(500).send({ error: "Internal Server Error" });
    }
  });
  return res.status(200).send({ message: "Logged Out Successfully" });
}
