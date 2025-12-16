import "../../styles/courts.css";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

export default function Courts() {
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

            {/* COURT CARD */}
            <div className="court-card">
              <img
                src="https://images.unsplash.com/photo-1606925797300-0b35e9d1794e"
                alt="Indoor Court"
              />
              <div className="court-info">
                <h3>Indoor Arena</h3>
                <p>Wooden flooring · Climate controlled</p>
                <div className="court-meta">
                  <span>⏱ 1 Hour Slots</span>
                  <span>💰 Rs. 1500</span>
                </div>
                <a href="/booking" className="btn btn-primary">
                  Book Now
                </a>
              </div>
            </div>

            {/* COURT CARD */}
            <div className="court-card">
              <img
                src="https://images.unsplash.com/photo-1546519638-68e109498ffc"
                alt="Outdoor Court"
              />
              <div className="court-info">
                <h3>Outdoor Pitch</h3>
                <p>Artificial turf · Flood lights</p>
                <div className="court-meta">
                  <span>⏱ 1 Hour Slots</span>
                  <span>💰 Rs. 1200</span>
                </div>
                <a href="/booking" className="btn btn-primary">
                  Book Now
                </a>
              </div>
            </div>

            {/* COURT CARD */}
            <div className="court-card">
              <img
                src="https://images.unsplash.com/photo-1594737625785-cf38e05d2c9d"
                alt="Training Court"
              />
              <div className="court-info">
                <h3>Training Court</h3>
                <p>Perfect for practice sessions</p>
                <div className="court-meta">
                  <span>⏱ 1 Hour Slots</span>
                  <span>💰 Rs. 1000</span>
                </div>
                <a href="/booking" className="btn btn-primary">
                  Book Now
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
