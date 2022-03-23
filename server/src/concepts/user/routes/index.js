import {
  createUser,
  updateUser,
  deleteUser,
  loginUser,
} from "../controllers/index.js";
import {
  isThatUser,
  isThatUserOrAdmin,
} from "../../authorization/controllers/auth.js";
import express from "express";

const router = express.Router();

router.post("/register", createUser);
router.put("/:id", isThatUser, updateUser);
router.delete("/:id", isThatUserOrAdmin, deleteUser);
router.post("/login", loginUser);

export default router;
