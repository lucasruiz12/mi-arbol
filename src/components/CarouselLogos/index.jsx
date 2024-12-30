import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { colorLogos, whiteLogos } from "../../helpers/logosToCarousel";
import './style.css';

const CarouselLogo = () => {
  const settings = {
    dots: false, // Muestra los puntos de navegación
    infinite: true, // Hace que el carrusel sea infinito
    speed: 2000, // Velocidad de la transición
    slidesToShow: 5, // Cantidad de logos visibles
    slidesToScroll: 1, // Logos que se mueven por scroll
    autoplay: true, // Activar desplazamiento automático
    autoplaySpeed: 2000, // Velocidad del desplazamiento
    cssEase: "linear", // Transición fluida
    arrows: false, // Oculta flechas
    responsive: [
      {
        breakpoint: 1024, // Para pantallas menores a 1024px
        settings: {
          slidesToShow: 4, // Muestra 3 imágenes
        },
      },
      {
        breakpoint: 768, // Para pantallas menores a 768px
        settings: {
          slidesToShow: 3, // Muestra 2 imágenes
        },
      },
      {
        breakpoint: 480, // Para pantallas menores a 480px
        settings: {
          slidesToShow: 2, // Muestra 1 imagen
        },
      },
    ],
  };

  return (
    <div className="carousel-container" style={{ width: "70%", margin: "0 auto", padding: "2rem 0", marginTop: "2vh" }}>
      <Slider {...settings}>
        {whiteLogos.map((logo, index) => (
          <div key={index} style={{ display: "flex", justifyContent: "center" }}>
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
