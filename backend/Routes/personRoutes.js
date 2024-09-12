import express from "express";
import { personRegistration } from "../controllers/personController.js";

const router = express.Router();

router.post("/registration", personRegistration);

export default router;
