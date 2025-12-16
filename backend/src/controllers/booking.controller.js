import Booking from "../models/Booking.model.js";
import { generateSlots } from "../utils/generateSlots.js";

export const getSlots = async (req, res) => {
  const { courtId, date } = req.query;
  const booked = await Booking.find({ court: courtId, date });

  const slots = generateSlots().map(slot => ({
    time: slot,
    booked: booked.some(b => b.timeSlot === slot)
  }));

  res.json(slots);
};

export const createBooking = async (req, res) => {
  const { courtId, date, time } = req.body;

  try {
    const booking = await Booking.create({
      user: req.user.id,
      court: courtId,
      date,
      timeSlot: time
    });
    res.json(booking);
  } catch {
    res.status(409).json({ message: "Slot already booked" });
  }
};
