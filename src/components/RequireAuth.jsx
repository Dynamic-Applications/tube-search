import React from "react";
import { Navigate, useLocation } from "react-router-dom";

// Dummy authentication function (replace with real auth logic)
const isAuthenticated = () => {
  return localStorage.getItem("isLoggedIn") === "true";
};

const RequireAuth = ({ children }) => {
  const location = useLocation();
  if (!isAuthenticated()) {
    // Redirect to login, preserve the current location
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
