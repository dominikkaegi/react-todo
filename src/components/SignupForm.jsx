import React, { useState } from "react";

import { signup } from "../utils/auth";

function SignupForm() {
  const [loading, setLoading] = useState(false);
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = event => {
    event.preventDefault();
    setLoading(true);
    signup({ email, password, displayName: nickname })
      .then(() => {
        console.log("successful, move on to Todo screen");
      })
      .catch(e => {
        console.error(e);
      });
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="p-3"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <label className="text-gray-800" htmlFor="nickname">
        Nickname
      </label>
      <input
        className="bg-gray-200 rounded p-3 flex-grow text-gray-700"
        id="nickname"
        type="text"
        placeholder="Jim"
        value={nickname}
        onChange={event => setNickname(event.target.value)}
      />
      <label className="text-gray-800" htmlFor="email">
        E-mail
      </label>
      <input
        className="bg-gray-200 rounded p-3 flex-grow text-gray-700"
        id="email"
        type="email"
        placeholder="jim@gmail.com"
        value={email}
        onChange={event => setEmail(event.target.value)}
      />
      <label className="text-gray-800" htmlFor="password">
        Password
      </label>
      <input
        className="bg-gray-200 rounded p-3 flex-grow text-gray-700"
        id="password"
        type="password"
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
      <button
        className="bg-orange-300 p-3 rounded text-gray-800 mt-2"
        type="submit"
      >
        Signup{loading ? "..." : ""}
      </button>
    </form>
  );
}

export default SignupForm;
