import express from "express";
import {
  fetchRecode,
  fetchAllRecodes,
  deleteRecode,
  replaceRecodes,
  diffSync,
} from "../controllers/algoliaController.js";

const router = express.Router();

router.get("/index", fetchRecode);
router.get("/index/fetchAll", fetchAllRecodes);
router.delete("/index/delete", deleteRecode);
router.put("/index/replaceAll", replaceRecodes);
router.get("/index/diffSync", diffSync);

export default router;
