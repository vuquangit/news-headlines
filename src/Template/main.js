import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import PrivateRoute from "Container/PrivateRoute";
import pageConfigs from "./pageConfigs";

const Main = () => {
  const _renderPage = () =>
    pageConfigs.map((route = {}, index) =>
      route.private ? (
        <PrivateRoute {...route} key={index} />
      ) : (
        <Route {...route} key={index} />
      )
    );

  return (
    <BrowserRouter>
      <Switch>{_renderPage()}</Switch>
    </BrowserRouter>
  );
};

export default Main;
