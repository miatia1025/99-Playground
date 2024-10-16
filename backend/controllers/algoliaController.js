import asyncHandler from "../middlewares/asyncHandler.js";

import dotenv from "dotenv";

import { algoliasearch } from "algoliasearch";
import Person from "../models/personModel.js";
import { query } from "express";

dotenv.config();
const appId = process.env.ALGOLIA_APP_ID;
const adminKey = process.env.ALGOLIA_ADMIN_KEY;

const client = algoliasearch(appId, adminKey);

const fetchRecode = asyncHandler(async (req, res) => {
  try {
    const { query } = req.body;
    // // // // console.log("🚀 ~ fetchRecode ~ query:", query);

    const results = await client.searchSingleIndex({
      indexName: "employee_list",
      searchParams: {
        query: query,
      },
    });

    res.status(200).json({ success: true, message: results.hits });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

const fetchAllRecodes = asyncHandler(async (req, res) => {
  //  Get all recodes
  try {
    const results = await client.searchSingleIndex({
      indexName: "employee_list",
    });
    res.status(200).json({ success: true, message: results.hits });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

const deleteRecode = asyncHandler(async (req, res) => {
  //  Get all recodes
  try {
    const results = await client.deleteObject({
      indexName: "employee_list",
      objectID: req.body.objectID,
    });
    res.status(200).json({ success: true, message: results.hits });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

const replaceRecodes = asyncHandler(async (req, res) => {
  try {
    const allPerson = await Person.find();

    client.replaceAllObjects({
      indexName: "employee_list",
      objects: allPerson,
    });

    res.status(200).json({ success: true, message: `replace done` });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

const diffSync = asyncHandler(async (req, res) => {
  try {
    const current = await client.browseObjects({
      indexName: "employee_list",
    });

    const now = await Person.find();
    const nowIdsObj = new Set(now.map((item) => item._id));
    const nowIds = new Set([...nowIdsObj].map((id) => id.toString()));

    const curIds = new Set(current.hits.map((item) => item._id));

    // 増えた分 (nowIdsStrに存在し、curIdsには存在しないもの)
    const plusDiff = [...nowIds].filter((item) => !curIds.has(item));

    // 減った分 (curIdsに存在し、nowIdsStrには存在しないもの)
    const minusDiff = [...curIds].filter((item) => !nowIds.has(item));

    console.log("🚀 ~ test ~ plusDiff:", plusDiff);
    console.log("🚀 ~ test ~ minusDiff:", minusDiff);

    // DBに追加されたドキュメントを取得
    const plusDocs = now.filter((doc) => plusDiff.includes(doc._id.toString()));

    // DBから減ったドキュメントを取得
    const minusDocs = current.hits.filter((doc) => minusDiff.includes(doc._id));

    client.saveObjects({
      indexName: "employee_list",
      objects: plusDocs,
    });

    client.deleteObjects({
      indexName: "employee_list",
      objectIDs: minusDocs.map((doc) => doc.objectID),
    });

    res.status(201).json({
      success: true,
      message: `登録完了！`,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

export { fetchRecode, fetchAllRecodes, deleteRecode, replaceRecodes, diffSync };
