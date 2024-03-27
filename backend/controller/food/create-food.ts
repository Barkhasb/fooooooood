import { Request, Response } from "express";
import { createFoodQuery } from "../../query";

export const createFoodController = async (req: Request, res: Response) => {
  try {
    // query
    const result = await createFoodQuery(req);
    res.send(result);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
