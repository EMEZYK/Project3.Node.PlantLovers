import { createHeight } from "../controllers/index.js";
import express from "express";

const router = express.Router();    

router.post("/", createHeight);

export default router;