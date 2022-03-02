import { createUser } from "../controllers/index.js";
import { updateUser } from "../controllers/index.js";

import express from "express";

const router = express.Router();

router.post("/register", createUser);
router.put("/updateUser/:id", updateUser);

export default router;
