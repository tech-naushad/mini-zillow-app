import { useState, useEffect } from "react";
import {jwtDecode} from 'jwt-decode';

const isValidJWT = (token) => {
  if (!token) return false;
  const parts = token.split(".");
  if (parts.length !== 3) return false;

  try {
    const payload = JSON.parse(atob(parts[1]));
    return typeof payload === "object";
  } catch (e) {
    return false;
  }
};

const useJwtValidator = (token) => {
  const [decoded, setDecoded] = useState(null);
  const [isValid, setIsValid] = useState(false);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    if (!token || !isValidJWT(token)) {
      setIsValid(false);
      setDecoded(null);
      return;
    }

    try {
      debugger
      const decodedToken = jwtDecode(token);
      setDecoded(decodedToken);
      setIsValid(true);

      const expTime = decodedToken.exp * 1000;
      setIsExpired(Date.now() > expTime);
    } catch (error) {
      setIsValid(false);
      setDecoded(null);
    }
  }, [token]);

  return { decoded, isValid, isExpired };
};

export default useJwtValidator;
