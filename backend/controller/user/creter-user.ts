import { Request, Response } from "express";
import { createNewUserQuery } from "../../query";

export const createUserController = async (req: Request, res: Response) => {
  try {
    const user = await createNewUserQuery(req);
    res.status(200).send(user);
  } catch (err: any) {
    res.status(500).send(err.message);
  }
};
