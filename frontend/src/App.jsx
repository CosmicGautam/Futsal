import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import WhatsAppFloat from "./components/layout/WhatsappFloat";

import Home from "./pages/public/Home";
import Courts from "./pages/public/Courts";
import About from "./pages/public/About";
import Contact from "./pages/public/Contact";
import Login from "./pages/auth/Login";
import Booking from "./pages/user/Booking";
import AdminDashboard from "./pages/admin/AdminDashboard";

import ProtectedRoute from "./components/common/ProtectedRoute";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courts" element={<Courts />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/booking"
          element={
            <ProtectedRoute role="user">
              <Booking />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}

export default App;
