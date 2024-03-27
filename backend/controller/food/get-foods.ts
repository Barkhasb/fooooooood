import { Request, Response } from "express";
import { getFoodsQuery } from "../../query";

export const getFoodsController = async (req: Request, res: Response) => {
  try {
    // query
    const allFoods = await getFoodsQuery();
    res.send(allFoods);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
