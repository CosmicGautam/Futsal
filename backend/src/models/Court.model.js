// backend/src/models/Court.model.js
import mongoose from "mongoose";

const courtSchema = new mongoose.Schema({
  _id: {
    type: String,  // Allow custom string IDs like "indoor-arena"
  },
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  pricePerHour: {
    type: Number,
    required: true,
  },
  amenities: [{
    type: String,
  }],
}, {
  timestamps: true,
  _id: false  // Don't auto-generate ObjectId
});

export default mongoose.model("Court", courtSchema);
