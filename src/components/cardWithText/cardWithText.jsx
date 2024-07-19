/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./cardWithText.css";
import PropTypes from "prop-types";
import { Button, Popover } from "react-bootstrap";

const CardWithText = ({ title, text, custom_class, phath }) => {
  const [showPopover, setShowPopover] = useState(false);

  const togglePopover = () => {
    setShowPopover(!showPopover);
  };

  return (
    <section className={`cardWithText__container ${custom_class}`}>
      <h1>
        <strong>{title}</strong>
      </h1>

      <div className="cardWithText__secondary">
        <div>
          <img
            onClick={togglePopover}
            src={phath}
            className="card-img-top cardWithText__img"
            alt="..."
          />
        </div>
        <div>
          <p>{text}</p>
        </div>
      </div>
    </section>
  );
};

CardWithText.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  custom_class: PropTypes.string,
  phath: PropTypes.string.isRequired,
};

CardWithText.defaultProps = {
  custom_class: "",
};

export default CardWithText;
