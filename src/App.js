import React from "react";
import TodoList from "./pages/TodoList";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import AuthProvider, { useAuthContext } from "./AuthProvider";

function App() {
  return (
    <AuthProvider>
      <AuthenticationGuard />
    </AuthProvider>
  );
}

function AuthenticationGuard() {
  const { auth, authAttempted } = useAuthContext();

  if (!authAttempted) {
    return <div>Loading...</div>;
  }
  return auth ? <LoggedIn /> : <LoggedOut />;
}

function LoggedIn() {
  return (
    <div>
      <NavBar />
      <TodoList />
    </div>
  );
}

function LoggedOut() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
