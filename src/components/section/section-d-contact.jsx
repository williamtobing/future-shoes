import React from "react";

import { contentList } from "../../assets/data";

import "../../scss/main.scss";

class SectionContactD extends React.Component {
  render() {
    return (
      <section id="contact-b" className="py-3 bg-dark">
        <div className="container">
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
        </div>
      </section>
    );
  }
}

export default SectionContactD;
