import { createUser } from "../controllers/index.js";
import { updateUser } from "../controllers/index.js";
import { deleteUser } from "../controllers/index.js";
import express from "express";

const router = express.Router();

router.post("/register", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
