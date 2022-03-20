import { getOffers } from "../controllers/index.js";
import express from "express";

const router = express.Router();

router.get("/offers", getOffers);

export default router;
