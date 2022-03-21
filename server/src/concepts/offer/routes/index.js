import express from "express";
import { createOffer } from "../controllers/index.js";

const router = express.Router();

router.post("/", createOffer);

export default router;
