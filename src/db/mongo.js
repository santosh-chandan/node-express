import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectMongoDB = async () => {
  try {
    const connectionInstace = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
}
export default connectMongoDB;
