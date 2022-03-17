import express from "express";
import { createHeight, getHeights } from "../controllers/index.js";

const router = express.Router();

router.post("/", createHeight);
router.get("/", getHeights);

export default router;
