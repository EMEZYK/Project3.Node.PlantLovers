import express from "express";
import { createOffer } from "../controllers/index.js";
import { getOffers } from "../useCases/getOffers.js";
import { updateOffer } from "../controllers/index.js";
import { isAuthenticated } from "../../authorization/controllers/auth.js";

const router = express.Router();

router.post("/", isAuthenticated, createOffer);
router.get("/", getOffers);
router.put("/:id", isAuthenticated, updateOffer);

export default router;
