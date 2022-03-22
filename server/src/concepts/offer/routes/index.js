import express from "express";
import { createOffer } from "../controllers/index.js";
import { getOffers } from "../controllers/index.js";
import { isAuthenticated } from "../../authorization/controllers/auth.js";

const router = express.Router();

router.post("/", isAuthenticated, createOffer);
router.get("/offers", getOffers);

export default router;
