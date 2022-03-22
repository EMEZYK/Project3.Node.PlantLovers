import express from "express";
import { createHeight, getHeights } from "../controllers/index.js";
import {
  isAuthenticated,
  isAdmin,
} from "../../authorization/controllers/auth.js";

const router = express.Router();

router.post("/", isAuthenticated, isAdmin, createHeight);
router.get("/", getHeights);

export default router;
