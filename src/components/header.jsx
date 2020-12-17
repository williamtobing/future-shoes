import React from "react";

import "../scss/main.scss";

const Header = () => (
  <header id="header-home">
    <div className="container">
      <div className="header-content">
        <h1>
          We are
          <span
            className="txt-type"
            data-wait="1000"
            data-words='["Future", "Shoes", "Future Shoes"]'
          ></span>
        </h1>
        <p className="lead">
          We are shoes that come from the future to accompany you in exploring
          forward.
        </p>
        <a className="btn-light" href="#gallery">
          View Our Articles
        </a>
      </div>
    </div>
  </header>
);

export default Header;
