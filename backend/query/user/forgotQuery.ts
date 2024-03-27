import { Request, Response } from "express";
import nodeMailer from "nodemailer";
import { UserModel } from "../../db";

const isEmailValid = async (email: string) => {
  const result = UserModel.findOne({ email: email });
  return result;
};

const transporter = nodeMailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "argunbarkhas@gmail.com",
    pass: "zfgeeczmtcvfaqcu",
  },
});

export const forgotPasswordQuery = async (req: Request) => {
  const { email } = req.body;

  const inUser = await isEmailValid(email);

  if (!inUser) {
    throw new Error("Email not found");
  }
  var val = Math.floor(1000 + Math.random() * 9000);
  console.log(val);

  const options = {
    form: "argunbarkhas@gmail.com",
    to: email,
    subject: "hello",
    text: `your code is ${val}`,
  };

  const updated = await UserModel.updateOne(
    { email: email },
    { $set: { otp: val } }
  );

  await transporter.sendMail(options);

  return updated;
};
