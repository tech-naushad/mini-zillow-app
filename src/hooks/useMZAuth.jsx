import { useMemo } from "react";
import {jwtDecode} from "jwt-decode";

const useMZAuth = () => {
  
  const token = sessionStorage.getItem("token");

  const decoded = useMemo(() => {
    if (!token) return null;
    try {
      return jwtDecode(token);
    } catch {
      return null;
    }
  }, [token]);

  const isExpired = () => {
    if (!decoded) return true;
    return decoded.exp * 1000 < Date.now();
  };

  return {
    token,
    decoded,
    isAuthenticated: !!token && !isExpired(),
    usertype: decoded?.payload?.usertype,
    role: decoded?.payload?.role || null,
  };
};

export default useMZAuth;
