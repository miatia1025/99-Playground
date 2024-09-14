import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./db/connectDB.js";

// Routes
import authRoutes from "./Routes/authRoutes.js";
import algoliaRoutes from "./Routes/algoliaRoutes.js";
import personRoutes from "./Routes/personRoutes.js";

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

const corsOptions = {
  origin: [process.env.CLIENT_URL],
  credentials: true,
};

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/person", personRoutes);
app.use("/api/algolia", algoliaRoutes);

app.listen(port, () => {
  connectDB();
  console.log(`Server is up on port ${port}`);
});
