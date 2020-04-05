import React, { useState } from "react";
import classNames from "classnames";

import Header from "../Pages/Header";
import "./basicTemplate.scss";

const BasicTemplate = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  var prevScrollpos = window.pageYOffset;
  window.onscroll = () => {
    if (document.getElementById("navbar")) {
      var currentScrollPos = window.pageYOffset;

      if (prevScrollpos > currentScrollPos) {
        setIsScrolled(false);
      } else if (currentScrollPos > 50) {
        setIsScrolled(true);
      }
      prevScrollpos = currentScrollPos;
    }
  };

  const classHeader = classNames("basic-template__header", {
    "basic-template__header-hidden": isScrolled,
  });

  return (
    <div className="basic-template">
      <header className={classHeader} id="navbar">
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
