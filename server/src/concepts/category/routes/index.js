import express from "express";
import { createCategory, getCategories } from "../controllers/index.js";
import {
  isAuthenticated,
  isAdmin,
} from "../../authorization/controllers/auth.js";

const router = express.Router();

router.post("/", isAuthenticated, isAdmin, createCategory);
router.get("/", getCategories);

export default router;
