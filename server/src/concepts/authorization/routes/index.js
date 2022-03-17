import { isTokenValid } from "../controllers/auth.js";
import { generateToken } from "../controllers/auth.js";
import express from "express";

const router = express.Router();

router.post("/", isTokenValid);
router.post("/", generateToken);


export default router;