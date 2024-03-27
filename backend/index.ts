import dotenv from "dotenv";
import { connectDb } from "./db";
import express from "express";
import cors from "cors";
import userRouter from "./router/user";
import { FoodRouter } from "./router";
import { CategoryRouter } from "./router/category";

const app = express();
app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(FoodRouter);
app.use(CategoryRouter);

connectDb();

app.listen(8000, () => {
  console.log("http://localhost:8000");
});

dotenv.config();
