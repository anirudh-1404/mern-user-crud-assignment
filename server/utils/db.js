import mongoose from "mongoose";

export const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to database!");
  } catch (err) {
    console.log("Error connecting to database!");
  }
};
