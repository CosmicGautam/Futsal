import mongoose from "mongoose";

const courtSchema = new mongoose.Schema({
  name: String,
  pricePerHour: Number,
  isActive: { type: Boolean, default: true }
});

export default mongoose.model("Court", courtSchema);
