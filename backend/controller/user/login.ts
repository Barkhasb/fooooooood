import { Request, Response } from "express";
import { loginQuery } from "../../query";

export const loginController = async (req: Request, res: Response) => {
  try {
    const result = await loginQuery(req, res);
    res.send(result);
  } catch (err: any) {
    res.status(400).send(err.message);
  }
};
