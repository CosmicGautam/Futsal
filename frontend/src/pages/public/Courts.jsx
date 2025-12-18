// src/pages/public/Courts.jsx
import { useNavigate } from "react-router-dom";
import "../../styles/courts.css";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

// Hardcoded courts with their database IDs
const COURTS = [
  {
    id: "indoor-arena", // This should match the court ID in your database
    name: "Indoor Arena",
    description: "Wooden flooring • Climate controlled",
    price: 1500,
    image: "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e"
  },
  {
    id: "outdoor-pitch",
    name: "Outdoor Pitch", 
    description: "Artificial turf • Flood lights",
    price: 1200,
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc"
  },
  {
    id: "training-court",
    name: "Training Court",
    description: "Perfect for practice sessions",
    price: 1000,
    image: "https://images.unsplash.com/photo-1594737625785-cf38e05d2c9d"
  }
];

export default function Courts() {
  const navigate = useNavigate();

  const handleBookCourt = (courtId) => {
    const token = localStorage.getItem('token');
    const auth = localStorage.getItem('auth');
    
    if (!token && !auth) {
      // Not logged in, redirect to login
      alert("Please login to book a court");
      navigate('/login');
      return;
    }
    
    // Navigate to booking page with courtId
    navigate(`/booking/${courtId}`);
  };

  return (
    <>
      <Header />

      {/* HERO */}
      <section className="courts-hero">
        <div className="container">
          <h1>Our Futsal Courts</h1>
          <p>
            World-class courts designed for speed, precision, and passion.
          </p>
        </div>
      </section>

      {/* COURTS LIST */}
      <section className="courts-section">
        <div className="container">
          <div className="courts-grid">

            {COURTS.map((court) => (
              <div key={court.id} className="court-card">
                <img
                  src={court.image}
                  alt={court.name}
                />
                <div className="court-info">
                  <h3>{court.name}</h3>
                  <p>{court.description}</p>
                  <div className="court-meta">
                    <span>⏱ 1 Hour Slots</span>
                    <span>💰 Rs. {court.price}</span>
                  </div>
                  <button 
                    onClick={() => handleBookCourt(court.id)}
                    className="btn btn-primary"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}