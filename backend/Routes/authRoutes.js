import express from "express";
import {
  signup,
  login,
  logout,
  personRegistration,
} from "../controllers/personController.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/registration", personRegistration);

export default router;
