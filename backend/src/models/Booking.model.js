import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    court: { type: mongoose.Schema.Types.ObjectId, ref: "Court" },
    date: String,               // YYYY-MM-DD
    timeSlot: String            // "10:00-11:00"
  },
  { timestamps: true }
);

// Prevent double booking
bookingSchema.index(
  { court: 1, date: 1, timeSlot: 1 },
  { unique: true }
);

export default mongoose.model("Booking", bookingSchema);
