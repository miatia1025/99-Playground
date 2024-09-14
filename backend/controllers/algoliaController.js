import asyncHandler from "../middlewares/asyncHandler.js";

import dotenv from "dotenv";

import { algoliasearch } from "algoliasearch";

dotenv.config();

const createIndex = asyncHandler(async (req, res) => {
  const query = req.query;

  const appId = process.env.ALGOLIA_APP_ID;
  const adminKey = process.env.ALGOLIA_ADMIN_KEY;

  const client = algoliasearch(appId, adminKey);

  const index = await client.searchSingleIndex({
    indexName: "employee_list",
    searchParams: {
      query: query,
    },
  });
  console.log("🚀 ~ createIndex ~ index:", index);

  res.status(200).json({ success: true, message: `${index}` });
});

const getAllRecodes = asyncHandler(async (req, res) => {
  //  Get all recodes
});

export { createIndex };
