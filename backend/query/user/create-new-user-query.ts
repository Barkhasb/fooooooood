import { Request } from "express";
import { UserModel } from "../../db";
import { passwordHash } from "../../utils";

export const createNewUserQuery = async (req: Request) => {
  try {
    const { name, email, phone, password } = req.body;

    // write data to db
    const hash = await passwordHash(password);

    const user = await UserModel.create({
      name,
      email,
      phone,
      password: hash,
    });

    return user;
  } catch (err: any) {
    return err.message;
  }
};
