import Fade from "react-reveal/Fade";

import { itemList } from "../../assets/data";

const SectionGallery = () => {
  return (
    <section id="gallery" className="text-center py-3">
      <div className="container">
        <Fade bottom>
          <h2 className="section-title">Our Articles</h2>
          <div className="bottom-line"></div>
          <p className="lead">
            We have completed our best articles. We're always learning and
            getting better with each release of our articles.
          </p>
          <div className="items">
            {itemList.map((item) => {
              return (
                <div key={item.productName} className="item">
                  <Fade right cascade>
                    <div className="item-image">
                      <img src={item.image} alt="" />
                    </div>
                  </Fade>
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
        </Fade>
      </div>
    </section>
  );
};

export default SectionGallery;
