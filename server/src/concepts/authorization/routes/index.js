import { generateToken } from "../controllers/index.js";
import express from "express";

const router = express.Router();

router.post("/auth", generateToken);

export default router;
