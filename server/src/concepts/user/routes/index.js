import { createUser } from "../controllers/index.js";
import { deleteUser } from "../controllers/index.js";
import express from "express";

const router = express.Router();

router.post("/register", createUser);
router.delete("/deleteUser/:id", deleteUser);

export default router;
