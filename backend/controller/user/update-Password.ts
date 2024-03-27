import { Request, Response } from "express";
import { updatePasswordQuery } from "../../query";

export const updatePasswordController = async (req: Request, res: Response) => {
  try {
    const result = await updatePasswordQuery(req);
    res.send(result);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
