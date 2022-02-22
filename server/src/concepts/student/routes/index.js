import express from "express";
const router = express.Router();
import { createStudent } from "../controllers/index.js";

router.post("/", createStudent);

export default router;