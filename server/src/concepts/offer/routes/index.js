import express from "express";
import {
  activateOffer,
  addView,
  archiveOffer,
  createOffer,
  deleteOffer,
} from "../controllers/index.js";
import { getOffers } from "../controllers/index.js";
import { isAuthenticated } from "../../authorization/controllers/auth.js";
import {
  isThatUser,
  isThatUserOrAdmin,
} from "../../authorization/controllers/auth.js";

const router = express.Router();

router.post("/", isAuthenticated, createOffer);
router.put("/:id", isThatUser, activateOffer);
router.put("/:id", isThatUserOrAdmin, archiveOffer);
router.put("/:id", addView);
router.delete("/:id", isThatUserOrAdmin, deleteOffer);
router.get("/offers", getOffers);

export default router;
