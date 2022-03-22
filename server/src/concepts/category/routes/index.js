import express from "express";
import { createCategory, getCategories } from "../controllers/index.js";
import { isAdmin } from "../../authorization/controllers/auth.js";

const router = express.Router();

router.post("/", isAdmin, createCategory);
router.get("/", getCategories);

export default router;
