import React from "react";

import Header from "../Pages/Header";
import "./basicTemplate.scss";

const BasicTemplate = ({ children }) => {
  return (
    <div className="basic-template">
      <header className="basic-template__header">
        <div className="basic-template__header--content">
          <Header />
        </div>
      </header>
      <main className="basic-template__main">
        <div className="basic-template__main--content">{children}</div>
      </main>
    </div>
  );
};

export default BasicTemplate;
