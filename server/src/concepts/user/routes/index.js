import {
  createUser,
  updateUser,
  deleteUser,
  loginUser,
} from "../controllers/index.js";
import {
  isAuthenticated,
  isAdmin,
} from "../../authorization/controllers/auth.js";
import express from "express";

const router = express.Router();

router.post("/register", createUser);
router.put("/:id", isAuthenticated, isAdmin, updateUser);
router.delete("/:id", isAdmin, deleteUser);
router.post("/login", loginUser);

export default router;
