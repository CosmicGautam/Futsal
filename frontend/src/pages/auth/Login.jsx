import { useState } from "react";
import "../../styles/login.css";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

export default function Login() {
  const [role, setRole] = useState("user");

  const handleSubmit = (e) => {
    e.preventDefault();
    // later → POST /api/auth/login
    alert(`Logged in as ${role}`);
  };

  return (
    <>
      <Header />

      {/* HERO */}
      <section className="auth-hero">
        <div className="container">
          <h1>Login</h1>
          <p>Access your futsal bookings and dashboard</p>
        </div>
      </section>

      {/* FORM */}
      <section className="auth-section">
        <div className="container auth-wrapper">
          <div className="auth-card">
            <h2>Welcome Back</h2>

            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email Address"
                required
              />

              <input
                type="password"
                placeholder="Password"
                required
              />

              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>

              <button className="btn btn-primary">
                Login
              </button>
            </form>

            <p className="auth-switch">
              Don’t have an account? <a href="/register">Register</a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
