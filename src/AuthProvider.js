import React, { createContext, useEffect, useState, useContext } from "react";
import { onAuthStateChanged } from "./utils/auth";

const AuthContext = createContext();

function AuthProvider(props) {
  const [authAttempted, setAuthAttempted] = useState(false);
  const [auth, setAuth] = useState(null);
  const { children } = props;

  useEffect(() => {
    return onAuthStateChanged(auth => {
      setAuthAttempted(true);
      setAuth(auth);
    });
  }, []);

  const contextValue = {
    authAttempted,
    auth
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}

export default AuthProvider;
