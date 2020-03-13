import React from "react";
import TodoList from "./pages/TodoList";
import Home from "./pages/Home";
import useAuth from "./hooks/useAuth";
import NavBar from "./components/NavBar";

function App() {
  const { auth, authAttempted } = useAuth();

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
