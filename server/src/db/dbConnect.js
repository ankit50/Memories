import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.MONGODB_URL}/memories`);
    console.log(`MongoDB Connected:${conn.connection.host}`);
  } catch (error) {
    console.error("Database Connection Error: " + error.message);
    process.exit(1);
  }
};

export default dbConnect;
