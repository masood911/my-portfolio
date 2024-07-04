import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const options = {
  items: 3,
  loop: true,
  margin: 10,
  nav: true,
  dots: true,
};


const CarouselComponent = () => {
  return (
    <div className="col-lg-12">
      <OwlCarousel className="owl-theme" {...options}>
        <div className="item">
          <img src="assets/images/collection-01.jpg" alt="" />
          <div className="down-content">
            <h4>Food & Vegetables Website</h4>
            <span className="collection">Year:<br /><strong>2024</strong></span>
            <span className="category">Category:<br /><strong>ReactJs</strong></span>
            <div className="main-button">
              <a href="explore.html">Explore</a>
            </div>
          </div>
        </div>
        <div className="item">
          <img src="assets/images/collection-02.jpg" alt="" />
          <div className="down-content">
            <h4>HealthCare Clinic Website</h4>
            <span className="collection">Year:<br /><strong>2024</strong></span>
            <span className="category">Category:<br /><strong>ReactJs</strong></span>
            <div className="main-button">
              <a href="explore.html">Explore</a>
            </div>
          </div>
        </div>
        <div className="item">
          <img src="assets/images/collection-03.jpg" alt="" />
          <div className="down-content">
            <h4>Cricket Match Tickets Website</h4>
            <span className="collection">Year:<br /><strong>2024</strong></span>
            <span className="category">Category:<br /><strong>Wesbite Design</strong></span>
            <div className="main-button">
              <a href="explore.html">Explore</a>
            </div>
          </div>
        </div>
        <div className="item">
          <img src="assets/images/collection-04.png" alt="" />
          <div className="down-content">
            <h4>Worldwide Artwork Ground</h4>
            <span className="collection">Items In Collection:<br /><strong>426/468</strong></span>
            <span className="category">Category:<br /><strong>Blockchain</strong></span>
            <div className="main-button">
              <a href="explore.html">Explore Worldwide</a>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
};

export default CarouselComponent;
