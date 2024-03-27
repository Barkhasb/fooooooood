import { Request, Response } from "express";
import { UserModel } from "../../db";
import { passwordHash } from "../../utils";

const getUserByEmail = async (email: string) => {
  const user = await UserModel.findOne({ email: email });

  return user;
};

export const updatePasswordQuery = async (req: Request) => {
  try {
    const { email, password } = req.body;
    const user = await getUserByEmail(email);
    if (!user) {
      throw new Error("Email not found");
    }
    const hashed = await passwordHash(password);
    const updated = await UserModel.updateOne(
      { email: user.email },
      { $set: { password: hashed } }
    );
    return updated;
  } catch (error) {
    return "Password Set Unsuccessful";
  }
};
