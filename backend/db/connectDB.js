import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to MongoDB : ${conn.connection.host}`);
  } catch (e) {
    console.log(`Error in connecting mongoDB : ${e}`);
    process.exit(1);
  }
};

export default connectDB;
