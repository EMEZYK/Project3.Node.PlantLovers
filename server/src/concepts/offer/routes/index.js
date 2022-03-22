import express from "express";
import { createOffer } from "../controllers/index.js";
import { getOffers } from "../controllers/index.js";
import { updateOffer } from "../controllers/index";

const router = express.Router();

router.post("/", createOffer);
router.get("/offers", getOffers);
router.put("/:id", updateOffer);

export default router;
