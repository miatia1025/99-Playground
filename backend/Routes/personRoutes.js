import express from "express";
import {
  personRegistration,
  getAllPerson,
} from "../controllers/personController.js";

const router = express.Router();

router.post("/registration", personRegistration);
router.get("", getAllPerson);

export default router;
