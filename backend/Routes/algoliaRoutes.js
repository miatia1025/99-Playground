import express from "express";
import { createIndex } from "../controllers/algoliaController.js";

const router = express.Router();

router.get("/index", createIndex);

export default router;
