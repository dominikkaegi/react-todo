import React from "react";
import { logout } from "../utils/auth";
import { useAuthContext } from "../AuthProvider";

export default function NavBar() {
  const logoutHandler = () => {
    logout();
  };

  const { auth } = useAuthContext();

  const toProfileHandler = () => {
    console.log("go to profile");
  };

  return (
    <div className="p-1 bg-gray-300 flex justify-center">
      <div className="md:w-4/6 flex p-3 ">
        <div className="md:w-4/6 ">
          <span className="font-bold text-orange-500 uppercase tracking-wide">
            {auth && auth.displayName}
          </span>
        </div>
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
