import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { get, isEqual, isEmpty } from "lodash";

import Loading from "Components/Loading";

const RedirectRoute = (props) => (
  <Redirect
    to={{
      pathname: "/login",
      state: { from: props.location },
    }}
  />
);

const PrivateRoute = ({ component: Component, ...rest }) => {
  const profile = useSelector(
    (state = {}) => get(state, "profile", {}),
    isEqual()
  );
  const isAuthenticated = !isEmpty(profile.data);
  const isLoading = get(profile, "isFetching", false);

  return !isLoading ? (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <RedirectRoute />
      }
    />
  ) : (
    <Loading />
  );
};

export default PrivateRoute;
