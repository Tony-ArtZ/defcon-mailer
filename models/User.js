import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      auto: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    roll: {
      type: String,
      required: true,
      unique: true,
    },
    tryhackmeId: {
      type: String,
    },
    year: {
      type: String,
      required: true,
    },
    rate: {
      type: String,
      required: true,
    },
  },
  { collection: "users" }
);

export const User = mongoose.model("User", userSchema);
