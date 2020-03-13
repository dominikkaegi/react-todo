import { useState, useEffect } from "react";
import { onAuthStateChanged } from "../utils/auth";

function useAuth() {
  const [authAttempted, setAuthAttempted] = useState(false);
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    return onAuthStateChanged(auth => {
      setAuthAttempted(true);
      setAuth(auth);
    });
  }, []);

  return { auth, authAttempted };
}

export default useAuth;
