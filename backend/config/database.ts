import mongoose from "mongoose";

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL!);
    console.log("database connected.");
  } catch (error) {
    console.error(error);
  }
};
