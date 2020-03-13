import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "./utils/auth";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [authAttempted, setAuthAttempted] = useState(false);
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    return onAuthStateChanged(auth => {
      setAuthAttempted(true);
      setAuth(auth);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ auth, authAttempted }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}

export default AuthProvider;
