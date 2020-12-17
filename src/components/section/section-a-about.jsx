import React from "react";

import { awardList } from "../../assets/data";

import "../../scss/main.scss";

class SectionAbout extends React.Component {
  render() {
    return (
      <section id="about-a" className="text-center py-3">
        <div className="container">
          <h2 className="section-title">About</h2>
          <div className="bottom-line"></div>
          <p className="lead">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime,
            consequuntur possimus cumque natus, nemo, fugiat vel tempore dolores
            autem non laborum tempora incidunt inventore aspernatur ut
            temporibus. Asperiores, soluta officia?
          </p>
          <div className="about-info">
            <div class="videoWrapper">
              <iframe
                title="about-video"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/xgAo-IZgm0E?controls=0"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="bio bg-light">
              <h4>Our brief history</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium, dolor qui. Beatae deserunt unde sed voluptatum
                nesciunt, nemo mollitia quasi obcaecati esse optio quibusdam,
                nulla, quisquam molestiae veritatis natus eveniet? Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Aliquid quaerat,
                labore eius illo nam quidem voluptate aliquam at, distinctio
                excepturi a voluptatum quas odio voluptates sed accusamus, quasi
                fugiat itaque. Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Quisquam neque in qui veritatis architecto
                perspiciatis. Libero optio id, sapiente doloremque iste veniam?
                Officia eaque nihil, consequatur dolorum est voluptatibus
                nostrum.
              </p>
            </div>
            {awardList.map((award) => {
              return (
                <div className={`${award.no}`}>
                  <i className="fas fa-award fa-3x"></i>
                  <h3>{award.title}</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Rerum obcaecati, tenetur voluptatem cupiditate, recusandae
                    iure reiciendis culpa doloribus nostrum quam neque inventore
                    voluptas illo cumque voluptatibus quas minus optio ipsum.
                  </p>
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
