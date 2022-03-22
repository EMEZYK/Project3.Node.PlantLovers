import express from "express";
import { createOffer } from "../controllers/index.js";
import { getOffers } from "../controllers/index.js";

router.post("/", createOffer);
router.get("/offers", getOffers);

export default router;
