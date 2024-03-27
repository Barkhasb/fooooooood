import { Request } from "express";
import { UserModel } from "../../db";

const inValidByEmial = async (email: string) => {
  const result = await UserModel.findOne({ email: email });
  return result;
};

export const checkOtpQuery = async (req: Request) => {
  const { otp, email } = req.body;
  try {
    const user = await inValidByEmial(email);

    if (user?.otp === otp) {
      await UserModel.updateOne({ email: user?.email }, { $set: { otp: "" } });
      return "success";
    } else {
      return "invalid code";
    }
  } catch (er: any) {
    throw new Error(er.message);
  }
};
