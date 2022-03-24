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
import { isAuthenticated } from "../../authorization/controllers/auth.js";
import {
  isAdmin,
  isThatUserOrAdmin,
} from "../../authorization/controllers/auth.js";
import { getOneOffer } from "../controllers/index.js";
const router = express.Router();

router.post("/", isAuthenticated, createOffer);
router.delete("/:id", isThatUserOrAdmin, deleteOffer);
router.get("/", getAllOffers);
router.get("/:id", getOneOffer);
router.put("/:id", isAuthenticated, updateOffer);
router.put("/activate/:id", isAdmin, activateOffer);
router.put("/archive/:id", isAuthenticated, archiveOffer);
router.put("/view/:id", addView);

export default router;
