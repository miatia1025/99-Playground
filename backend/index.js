import express from "express";
import dotenv from "dotenv";
import authRoutes from "./Routes/authRoutes.js";
import cookieParser from "cookie-parser";
import connectDB from "./db/connectDB.js";

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  connectDB();
  console.log(`Server is up on port ${port}`);
});
