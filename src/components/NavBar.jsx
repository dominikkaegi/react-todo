import React from "react";
import { logout } from "../utils/auth";

export default function Header() {
  const logoutHandler = () => {
    logout();
  };

  return (
    <div className="p-1 bg-gray-300 flex justify-center">
      <div className="md:w-4/6">
        <button
          onClick={logoutHandler}
          className="p-3 bg-gray-300 rounded rounded-l-none text-gray-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
