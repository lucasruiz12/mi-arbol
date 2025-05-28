import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { whiteLogos } from "../../helpers/logosToCarousel";
import './style.css';

const CarouselLogo = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          speed: 1500,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          speed: 1500,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {whiteLogos.map((logo, index) => (
          <div key={index} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              className="img-logo-carousel"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselLogo;
