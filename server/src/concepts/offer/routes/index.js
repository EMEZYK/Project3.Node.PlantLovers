import express from "express";
import { createOffer } from "../controllers/index.js";
import { getOffers } from "../controllers/index.js";
import {
  isAuthenticated,
  isAdmin,
} from "../../authorization/controllers/auth.js";

const router = express.Router();

router.post("/", isAuthenticated, isAdmin, createOffer);
router.get("/offers", getOffers);

export default router;
