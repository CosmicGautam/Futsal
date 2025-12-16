import { useEffect, useState } from "react";
import "../../styles/booking.css";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

const TIME_SLOTS = [
  "08:00", "09:00", "10:00", "11:00",
  "12:00", "13:00", "14:00", "15:00",
  "16:00", "17:00", "18:00", "19:00"
];

export default function Booking() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [bookedSlots, setBookedSlots] = useState([]);

  // TEMP: simulate backend booked slots
  useEffect(() => {
    setBookedSlots(["10:00", "14:00"]);
  }, [selectedDate]);

  const handleBooking = (e) => {
    e.preventDefault();
    if (!selectedDate || !selectedSlot) return;

    alert(
      `Booking confirmed\nDate: ${selectedDate}\nTime: ${selectedSlot}`
    );

    // later → POST to backend
  };

  return (
    <>
      <Header />

      {/* HERO */}
      <section className="booking-hero">
        <div className="container">
          <h1>Book Your Court</h1>
          <p>Select date, time slot, and confirm your match</p>
        </div>
      </section>

      {/* BOOKING */}
      <section className="booking-section">
        <div className="container booking-wrapper">

          {/* DATE */}
          <div className="booking-card">
            <h3>Select Date</h3>
            <input
              type="date"
              onChange={(e) => {
                setSelectedDate(e.target.value);
                setSelectedSlot(null);
              }}
            />
          </div>

          {/* TIME SLOTS */}
          <div className="booking-card">
            <h3>Available Time Slots</h3>
            <div className="slots-grid">
              {TIME_SLOTS.map((slot) => {
                const isBooked = bookedSlots.includes(slot);
                const isSelected = slot === selectedSlot;

                return (
                  <button
                    key={slot}
                    disabled={isBooked}
                    className={`slot 
                      ${isBooked ? "booked" : ""}
                      ${isSelected ? "selected" : ""}`}
                    onClick={() => setSelectedSlot(slot)}
                  >
                    {slot}
                  </button>
                );
              })}
            </div>
          </div>

          {/* FORM */}
          <div className="booking-card">
            <h3>Player Details</h3>

            <form onSubmit={handleBooking}>
              <input required placeholder="Full Name" />
              <input required placeholder="Phone Number" />
              <input required type="email" placeholder="Email" />

              <select required>
                <option value="">Select Court</option>
                <option>Indoor Arena</option>
                <option>Outdoor Pitch</option>
                <option>Training Court</option>
              </select>

              <button
                className="btn btn-primary"
                disabled={!selectedDate || !selectedSlot}
              >
                Confirm Booking
              </button>
            </form>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
