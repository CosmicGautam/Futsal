import express from "express";
import { protect } from "../middleware/auth.middleware.js";
import { getSlots, createBooking } from "../controllers/booking.controller.js";

const router = express.Router();

router.get("/slots", getSlots);
router.post("/", protect, createBooking);

export default router;
