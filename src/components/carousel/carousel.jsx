/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Carousel } from "react-bootstrap";
import "./carousel.css";

const CustomCarousel = ({ items, width, height }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      style={{ width: width, height: height }}
    >
      {items.map((item, idx) => (
        <Carousel.Item key={idx}>
          {item.type === "image" && (
            <>
              <img
                className="d-block w-100 img-fluid"
                src={item.src}
                alt={`Slide ${idx}`}
                style={{
                  objectFit: "contain",
                  maxHeight: height,
                  width: width,
                }} // Ajustar el tamaño máximo y ancho al 100%
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>{item.caption_title}</h5>
                <p>{item.caption}</p>
              </div>
            </>
          )}
          {item.type === "video" && (
            <video
              className="d-block w-100"
              style={{ objectFit: "contain", maxHeight: height, width: width }} // Ajustar el tamaño máximo y ancho al 100%
              autoPlay
              loop
              muted
            >
              <source src={item.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          {item.type === "gif" && (
            <img
              className="d-block w-100"
              style={{ objectFit: "contain", maxHeight: height, width: width }} // Ajustar el tamaño máximo y ancho al 100%
              src={item.src}
              alt={`Slide ${idx}`}
            />
          )}
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

CustomCarousel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(["image", "video", "gif"]).isRequired,
      src: PropTypes.string.isRequired,
      title: PropTypes.string,
      description: PropTypes.string,
      caption_title: PropTypes.string,
      caption: PropTypes.string,
    })
  ).isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default CustomCarousel;
