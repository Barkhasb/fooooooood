import { Router } from "express";
import {
  createUserController,
  loginController,
  forgotController,
  updatePasswordController,
  checkOtpController,
} from "../../controller";

const userRouter = Router();

userRouter.post("/signup", createUserController);
userRouter.post("/login", loginController);
userRouter.post("/forgot", forgotController);
userRouter.post("/updatePassword", updatePasswordController);
userRouter.post("/chechOtp", checkOtpController);
export default userRouter;
