import React from "react";

import { itemList } from "../../assets/data";

import "../../scss/main.scss";

class SectionGallery extends React.Component {
  render() {
    return (
      <section id="gallery" className="text-center py-3">
        <div className="container">
          <h2 className="section-title">Our Articles</h2>
          <div className="bottom-line"></div>
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae harum
            itaque veritatis! Non molestias repudiandae unde quasi quos,
            quibusdam enim corrupti corporis, beatae officia doloremque fuga
            consequatur nostrum harum blanditiis.
          </p>
          <div className="items">
            {itemList.map((item) => {
              return (
                <div className="item">
                  <div className="item-image">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="item-text">
                    <div className="item-text-wrap">
                      <p className="item-text-category">{item.category}</p>
                      <h2 className="item-text-title">{item.productName}</h2>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default SectionGallery;
