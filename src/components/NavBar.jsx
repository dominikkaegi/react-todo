import React from "react";
import { logout } from "../utils/auth";

export default function Header() {
  const logoutHandler = () => {
    logout();
  };

  const toProfileHandler = () => {
    console.log("go to profile");
  };

  return (
    <div className="p-1 bg-gray-300 flex justify-center">
      <div className="md:w-4/6 flex p-3 ">
        <div className="md:w-4/6">UserName to Display</div>
        <div className="md:w-2/6 flex justify-end text-gray-600">
          <button onClick={toProfileHandler} className="px-1">
            Profile
          </button>
          <button onClick={logoutHandler} className="px-1">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
