import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="nav-wrapper">
          <div className="logo">
            <span className="logo-text">FG</span>
            <span className="brand-name">FUTSALGO</span>
          </div>

          <nav className={`nav ${open ? "active" : ""}`}>
            <a href="/">Home</a>
            <a href="/courts">Courts</a>
            <a href="/booking">Booking</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>

          <button
            className="menu-toggle"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
