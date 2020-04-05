import React from "react";
import { Helmet } from "react-helmet";

import "./App.css";
import Main from "./Template/main";

const App = () => (
  <div className="App">
    <Helmet>
      <meta charSet="utf-8" />
      <title>News Headlines Today</title>
      <meta name="description" content="News Headlines Today" />
      <link
        rel="canonical"
        href="https://news-headlines-today.firebaseapp.com"
      />
    </Helmet>
    <Main />
  </div>
);

export default App;
