import React from "react";

import Fade from "react-reveal/Fade";

import { contentList } from "../../assets/data";

import "../../scss/main.scss";

class SectionContactD extends React.Component {
  render() {
    return (
      <section id="contact-b" className="py-3 bg-dark">
        <div className="container">
          <Fade bottom cascade>
            <div className="contact-info">
              {contentList.map((content) => {
                return (
                  <div key={content.contact}>
                    <i className={`${content.fas}`}></i>
                    <h3>{content.contact}</h3>
                    <p>{content.detail}</p>
                  </div>
                );
              })}
            </div>
          </Fade>
        </div>
      </section>
    );
  }
}

export default SectionContactD;
