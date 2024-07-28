import React from 'react';
import Slider from 'react-slick';
import './MainVisual.css';

const MainVisual = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="main-visual">
      <Slider {...settings}>
        <div><img src="path_to_image1.jpg" alt="recommendation 1" /></div>
        <div><img src="path_to_image2.jpg" alt="recommendation 2" /></div>
        <div><img src="path_to_image3.jpg" alt="recommendation 3" /></div>
      </Slider>
    </div>
  );
}

export default MainVisual;
