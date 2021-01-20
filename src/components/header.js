import React from "react";

import Swing from "react-reveal/Swing";

import "../scss/main.scss";

const Header = () => (
  <header id="header-home">
    <div className="container">
      <div className="header-content">
        <div className="header-txt">
          <h1>
            We are
            <span
              className="txt-type"
              data-wait="1000"
              data-words='["Future", "Shoes", "Future Shoes"]'
            ></span>
          </h1>
          <p className="lead">
            Shoes that come from the future to accompany you in exploring
            forward.
          </p>
        </div>
        <Swing>
          <a className="btn-main" href="#gallery">
            View Our Articles
          </a>
        </Swing>
      </div>
    </div>
  </header>
);

export default Header;
