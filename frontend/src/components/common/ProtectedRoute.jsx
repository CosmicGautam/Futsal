// src/components/common/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function ProtectedRoute({ children, role }) {
  const { user } = useAuth();

  // Not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Check role if specified
  if (role && user.role !== role) {
    // If user is trying to access admin but is not admin
    if (role === "admin" && user.role !== "admin") {
      return <Navigate to="/courts" replace />;
    }
  }

  return children;
}