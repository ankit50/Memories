import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const MONGODB_URL = process.env.MONGODB_URL;
    const conn = await mongoose.connect(`${MONGODB_URL}`);
    console.log(`MongoDB Connected:${conn.connection.host}`);
  } catch (error) {
    console.error("Database Connection Error: " + error.message);
    process.exit(1);
  }
};

export default dbConnect;
