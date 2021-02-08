import Fade from "react-reveal/Fade";

import { classList } from "../assets/data";

const Footer = () => {
  return (
    <footer id="main-footer">
      <div className="footer-content container">
        <Fade bottom>
          <p>Copyright &copy; 2021. All Right Reserved</p>
          <div className="social">
            {classList.map((name) => {
              return <i key={name.connect} className={`${name.fab}`}></i>;
            })}
          </div>
        </Fade>
      </div>
    </footer>
  );
};

export default Footer;
