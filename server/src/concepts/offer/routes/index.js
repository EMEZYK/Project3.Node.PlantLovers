import express from "express";
import { updateOffer } from "../controllers/index";

const router = express.Router();

router.put("/:id", updateOffer);

export default router;
