import React, { useState, useReducer } from "react";

import { signup } from "../utils/auth";

function reducer(state, action) {
  switch (action.type) {
    case "ON_INPUT": {
      return {
        ...state,
        [action.field]: action.value
      };
    }
    case "SIGNUP": {
      return {
        ...state,
        loading: true,
        submissionDisabled: true
      };
    }
    case "SIGNUP_FAILED": {
      return {
        ...state,
        loading: false,
        submissionDisabled: false,
        error: action.error
      };
    }
    default: {
      return state;
    }
  }
}

const intialState = {
  nickname: "",
  email: "",
  password: "",
  error: null,
  loading: false,
  submissionDisabled: false
};

function SignupForm() {
  const [state, dispatch] = useReducer(reducer, intialState);

  const {
    nickname,
    email,
    password,
    error,
    loading,
    submissionDisabled
  } = state;

  const onChange = e => {
    dispatch({ type: "ON_INPUT", field: e.target.name, value: e.target.value });
  };

  const onSubmitHandler = event => {
    event.preventDefault();
    dispatch({ type: "SIGNUP" });
    signup({ email, password, displayName: nickname })
      .then(() => {
        console.log("successful, move on to Todo screen");
      })
      .catch(e => {
        dispatch({ type: "SIGNUP_FAILED", error: e.message });
        console.error(e);
      });
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="p-3"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <span className="text-red-800">{error}</span>
      <label className="text-gray-800" htmlFor="nickname">
        Nickname
      </label>
      <input
        className="bg-gray-200 rounded p-3 flex-grow text-gray-700"
        id="nickname"
        name="nickname"
        type="text"
        placeholder="Jim"
        value={nickname}
        onChange={onChange}
      />
      <label className="text-gray-800" htmlFor="email">
        E-mail
      </label>
      <input
        className="bg-gray-200 rounded p-3 flex-grow text-gray-700"
        id="email"
        name="email"
        type="email"
        placeholder="jim@gmail.com"
        value={email}
        onChange={onChange}
      />
      <label className="text-gray-800" htmlFor="password">
        Password
      </label>
      <input
        className="bg-gray-200 rounded p-3 flex-grow text-gray-700"
        id="password"
        name="password"
        type="password"
        value={password}
        onChange={onChange}
      />
      <button
        className="bg-orange-300 p-3 rounded text-gray-800 mt-2"
        type="submit"
        disabled={submissionDisabled}
      >
        Signup{loading ? "..." : ""}
      </button>
    </form>
  );
}

export default SignupForm;
