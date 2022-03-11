import { createCategory } from "../controllers/index.js";
import { getAllCategories } from "../repositories/queries.js";
import express from "express";

const router = express.Router();    

router.post("/", createCategory);
router.post("/allcategories", getAllCategories);

export default router;