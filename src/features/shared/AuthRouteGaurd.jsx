// src/routes/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import useMZAuth from "../../hooks/useMZAuth";

const AuthRouteGaurd = ({ children, module, roles = [] }) => {   
  const { isAuthenticated, role } = useMZAuth();

  if (module === "admin") {
    if (isAuthenticated) {
      if (roles.length > 0 && !roles.includes(role)) {
        return <Navigate to="/unauthorized" replace />;
      }
    }
    else{
       return <Navigate to="/admin/adminlogin" replace />;
    }
  } else {
    if (!isAuthenticated) {
      return <Navigate to="/auth/login" replace />;
    }
  }

  return children;
};

export default AuthRouteGaurd;
