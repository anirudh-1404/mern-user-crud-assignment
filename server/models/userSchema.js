import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
    trim: true,
  },
});

export const User = mongoose.model("User", userSchema);
