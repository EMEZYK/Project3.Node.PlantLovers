import { createUser } from "../controllers/index.js";
import express from "express";

const router = express.Router();

router.post("/register", createUser);

export default router;
