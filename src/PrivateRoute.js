import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";

const PrivateRoute = ({ children, ...rest }) => {
  const { currentUser } = useContext(AuthContext);

  return (
    <Route {...rest}>
      {!!currentUser ? children : <Redirect to={"/login"} />}
    </Route>
  );
};

export default PrivateRoute;
