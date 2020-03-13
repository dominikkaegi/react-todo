import React, { useState, useReducer } from "react";

import { signup } from "../utils/auth";

const initalState = {
  nickname: "",
  email: "",
  password: "",
  loading: false,
  submitDisabled: false,
  error: null
};

function reducer(state, action) {
  switch (action.type) {
    case "FORM_INPUT": {
      return {
        ...state,
        [action.field]: action.value
      };
    }
    case "SIGNUP": {
      return {
        ...state,
        loading: true,
        submitDisabled: true
      };
    }
    case "SIGNUP_ERROR": {
      return {
        ...state,
        loading: false,
        submitDisabled: false,
        error: action.error
      };
    }
    default:
      return state;
  }
}

function SignupForm() {
  const [state, dispatch] = useReducer(reducer, initalState);
  const { loading, nickname, email, password, submitDisabled, error } =
    state || {};

  const onChange = e => {
    dispatch({
      type: "FORM_INPUT",
      field: e.target.name,
      value: e.target.value
    });
  };

  const onSubmitHandler = event => {
    event.preventDefault();
    dispatch({ type: "SIGNUP" });
    signup({ email, password, displayName: nickname })
      .then(() => {
        console.log("signup");
      })
      .catch(err => {
        dispatch({ type: "SIGNUP_ERROR", error: err.message });
        console.error(err);
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
        disabled={submitDisabled}
      >
        Signup{loading ? "..." : ""}
      </button>
    </form>
  );
}

export default SignupForm;
