import React from "react";
import { Route, Redirect } from "react-router-dom";
import Loading from "Components/Loading";

const RedirectRoute = props => (
  <Redirect
    to={{
      pathname: "/login",
      state: { from: props.location }
    }}
  />
);

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = false;
  const isLoading = false;

  return !isLoading ? (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? <Component {...props} /> : <RedirectRoute />
      }
    />
  ) : (
    <Loading />
  );
};

export default PrivateRoute;
