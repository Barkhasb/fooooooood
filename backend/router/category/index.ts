import { Router } from "express";
import {
  CreateCategoryController,
  getCategoriesController,
  getCategoryController,
} from "../../controller";

export const CategoryRouter = Router();

CategoryRouter.post("/category", CreateCategoryController);
CategoryRouter.get("/category", getCategoryController);
CategoryRouter.get("/categories", getCategoriesController);
