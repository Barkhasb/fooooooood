import { Response, Request } from "express";
import { checkOtpQuery } from "../../query";

export const checkOtpController = async (req: Request, res: Response) => {
  try {
    const result = await checkOtpQuery(req);
    res.send(result);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
