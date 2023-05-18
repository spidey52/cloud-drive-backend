import mongoose from "mongoose";
import myenv from "../utils/loadEnv";

const dbconn = async () => {
 try {
  const conn = await mongoose.connect(myenv.db_url, {});
  console.log(`Connected to MongoDB ${conn.connection.host}:${conn.connection.port}`);
 } catch (error: any) {
  console.log("Error connecting to MongoDB", error.message);
 }
};

export default dbconn;
