import express from "express";
import { createCategory, getCategories } from "../controllers/index.js";

const router = express.Router();    

router.post("/", createCategory);
router.post("/", getCategories);

export default router;