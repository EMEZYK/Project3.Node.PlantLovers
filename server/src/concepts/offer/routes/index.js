import express from "express";
import {
  activateOffer,
  addView,
  archiveOffer,
  createOffer,
  deleteOffer,
  getAllOffers,
  updateOffer,
} from "../controllers/index.js";
import { getOffers } from "../useCases/getOffers.js";
import { isAuthenticated } from "../../authorization/controllers/auth.js";
import {
  isThatUser,
  isThatUserOrAdmin,
} from "../../authorization/controllers/auth.js";

const router = express.Router();

router.post("/", isAuthenticated, createOffer);
router.delete("/:id", isThatUserOrAdmin, deleteOffer);
router.get("/offers", getOffers);
router.get("/", getAllOffers);
router.put("/:id", isAuthenticated, updateOffer);
router.put("/:id", isThatUser, activateOffer);
router.put("/:id", isThatUserOrAdmin, archiveOffer);
router.put("/:id", addView);

export default router;
