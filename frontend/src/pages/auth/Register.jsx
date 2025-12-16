import "../../styles/login.css";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

export default function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // later → POST /api/auth/register
    alert("Account created successfully");
  };

  return (
    <>
      <Header />

      {/* HERO */}
      <section className="auth-hero">
        <div className="container">
          <h1>Register</h1>
          <p>Create your account and start booking courts</p>
        </div>
      </section>

      {/* FORM */}
      <section className="auth-section">
        <div className="container auth-wrapper">
          <div className="auth-card">
            <h2>Create Account</h2>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                required
              />

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

              <input
                type="password"
                placeholder="Confirm Password"
                required
              />

              <button className="btn btn-primary">
                Register
              </button>
            </form>

            <p className="auth-switch">
              Already have an account? <a href="/login">Login</a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
