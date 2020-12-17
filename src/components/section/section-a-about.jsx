import React from "react";

import { awardList, aboutDesc } from "../../assets/data";
import ReactPlayer from "react-player/youtube";

import "../../scss/main.scss";

class SectionAbout extends React.Component {
  render() {
    return (
      <section id="about-a" className="text-center py-3">
        <div className="container">
          <h2 className="section-title">About</h2>
          <div className="bottom-line"></div>
          <p className="lead">{aboutDesc.aboutBrief}</p>
          <div className="about-info">
            <div className="videoWrapper">
              <ReactPlayer
                url="https://www.youtube.com/embed/xgAo-IZgm0E"
                className="react-player"
                width="560"
                height="315"
                controls={false}
              />
            </div>
            <div className="bio bg-light">
              <h4>Our brief history</h4>
              <p>{aboutDesc.history}</p>
            </div>
            {awardList.map((award) => {
              return (
                <div key={award.no} className={`${award.no}`}>
                  <i className="fas fa-award fa-3x"></i>
                  <h3>{award.title}</h3>
                  <p>{award.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default SectionAbout;
