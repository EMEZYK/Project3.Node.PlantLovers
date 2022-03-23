import express from "express";
import {
  getAllOffers,
  createOffer,
  updateOffer,
} from "../controllers/index.js";
import { isAuthenticated } from "../../authorization/controllers/auth.js";

const router = express.Router();

router.post("/", isAuthenticated, createOffer);
router.get("/", getAllOffers);
router.put("/:id", isAuthenticated, updateOffer);

export default router;
