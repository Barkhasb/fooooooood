import { Request, Response } from "express";
import { UserModel } from "../../db";
import { compareHash, tokenGenerate } from "../../utils";

const getUserByEmail = async (email: string) => {
  const user = await UserModel.findOne({ email: email });
  console.log(user);

  return user;
};

export const loginQuery = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await getUserByEmail(email);

  if (!user) {
    throw new Error("User not found");
  }

  const isPasswordRight = await compareHash(user.password, password);

  if (!isPasswordRight) {
    throw new Error("Wrong email or password");
  }

  const token = await tokenGenerate(user._id.toString());
  return token;
};
