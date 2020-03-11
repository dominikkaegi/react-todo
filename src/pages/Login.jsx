import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import firebase from "../base";
import { AuthContext } from "../Auth";
import { Redirect } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = e => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        history.push("/");
      })
      .catch(err => {
        console.error(err);
      });
  };

  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h3>Login</h3>
      <form onSubmit={submitHandler}>
        <div>
          <input
            name="email"
            type="email"
            value={email}
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            name="password"
            type="password"
            value={password}
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
