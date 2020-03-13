import React, { useState } from "react";
import { login } from "../utils/auth";

const initalErrors = {
  email: null,
  password: null
};

function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(initalErrors);

  const validateForm = () => {
    let isValid = true;
    setErrors({ ...initalErrors });
    if (email.length <= 1) {
      setErrors({ ...errors, email: "Email required" });
    }
    if (password.length <= 1) {
      setErrors({ ...errors, password: "Password required" });
    }
    return isValid;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const isValid = validateForm();
    if (!isValid) {
      return;
    }

    setLoading(true);
    login(email, password).then(() => {
      setLoading(false);
    });
  };

  return (
    <form
      className="p-3"
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", minWidth: "200px" }}
    >
      <label className="text-gray-800" htmlFor="email">
        E-mail
      </label>
      <input
        className="bg-gray-200 rounded p-3 flex-grow text-gray-700"
        type="email"
        id="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <div style={{ color: "red" }}>{errors.email}</div>
      <label className="text-gray-800" htmlFor="email">
        Password
      </label>
      <input
        className="bg-gray-200 rounded p-3 flex-grow text-gray-700"
        type="password"
        id="email"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <div style={{ color: "red" }}>{errors.password}</div>
      <button
        className="bg-orange-300 p-3 rounded text-gray-800"
        type="submit"
        style={{ marginTop: "10px" }}
      >
        {loading ? "Loading...." : "Login"}
      </button>
    </form>
  );
}
export default LoginForm;
