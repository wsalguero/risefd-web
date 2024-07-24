/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const CustomCardSlides = ({ layout, img, title, parraf }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsMobile(screenWidth <= 768); // Establece isMobile como true si el ancho de la ventana es menor o igual a 768px
    };

    handleResize(); // Ejecuta la función handleResize cuando se monta el componente para establecer el valor inicial de isMobile

    window.addEventListener("resize", handleResize); // Agrega un event listener para manejar el cambio de tamaño de la ventana

    return () => {
      window.removeEventListener("resize", handleResize); // Limpia el event listener al desmontar el componente para evitar fugas de memoria
    };
  }, []);
  return (
    <div
      className={`${
        layout === "left"
          ? "md:flex md:flex-row flex-col md:justify-between items-center mb-3"
          : "md:flex md:flex-row flex-col-reverse md:justify-between items-center mb-3"
      }`}
    >
      {!isMobile && layout === "left" ? (
        <div className="flex justify-center md:ps-16 order-first md:order-last">
          <img
            src={img}
            alt={title}
            className="object-contain home__img-introsection md:pe-16"
          />
        </div>
      ) : (
        ""
      )}
      <div className="md:w-1/2 p-4">
        <h1 className="text-2xl font-bold mb-3 md:ps-16">{title}</h1>
        <p className="md:ps-16 text-lg">{parraf}</p>
      </div>
      {isMobile ? (
        <div
          className={`flex justify-center md:ps-16 order-first md:order-last`}
        >
          <img
            src={img}
            alt={title}
            className="object-contain home__img-introsection md:pe-16"
          />
        </div>
      ) : (
        ""
      )}
      {!isMobile && layout === "right" ? (
        <div className="flex justify-center p-4 order-last md:order-first">
          <img
            src={img}
            alt={title}
            className="object-contain home__img-introsection md:pe-16"
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

CustomCardSlides.propTypes = {
  layout: PropTypes.string, // "grid" or "columns"
  img: PropTypes.string, // URL of the image to be displayed
  title: PropTypes.string, // Title of the card
  parraf: PropTypes.string, // Content of the card
};

export default CustomCardSlides;
