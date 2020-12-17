import React from "react";

import { classList } from "../assets/data";

import "../scss/main.scss";

class Footer extends React.Component {
  render() {
    return (
      <footer id="main-footer">
        <div className="footer-content container">
          <p>Copyright &copy; 2020. All Right Reserved</p>
          <div className="social">
            {classList.map((name) => {
              return <i className={`${name.fab}`}></i>;
            })}
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
