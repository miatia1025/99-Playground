import express from "express";
import {
  personRegistration,
  getAllPerson,
} from "../controllers/personController.js";
import { diffSync } from "../controllers/algoliaController.js";

const router = express.Router();

router.post("/registration", personRegistration, diffSync);
router.get("", getAllPerson);

export default router;
