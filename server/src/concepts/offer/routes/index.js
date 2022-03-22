import express from "express";
import { updateOffer } from "../controllers/index";
import { isAuthenticated } from "../../authorization/controllers/auth.js";
const router = express.Router();

router.put("/:id", isAuthenticated, updateOffer);

export default router;
