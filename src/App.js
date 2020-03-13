import React from "react";
import TodoList from "./pages/Todo";
import Home from "./pages/Home";
import useAuth from "./hooks/useAuth";

import { logout } from "./utils/auth";

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
      <div className="p-5">
        <button onClick={logout}>Logout</button>
      </div>
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
