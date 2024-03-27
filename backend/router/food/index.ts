import { Router } from "express";
import { createFoodController, getFoodsController } from "../../controller";

export const FoodRouter = Router();

FoodRouter.get("/foods", getFoodsController);
FoodRouter.post("/create-food", createFoodController);
