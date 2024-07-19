/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Button, OverlayTrigger, Popover } from "react-bootstrap";
import PropTypes from "prop-types";

import "./popoverCard.css";

const PopoverCard = ({
  content,
  img_path,
  text_content,
  btn_class,
  img_class,
  placement,
  width,
  height,
  title,
  title_class,
  container_class,
}) => {
  const [showPopover, setShowPopover] = useState(false);

  const togglePopover = () => {
    setShowPopover(!showPopover);
  };

  return (
    <>
      <section
        className={`${container_class} popover-container ${
          showPopover ? "popover-active" : ""
        }`}
        style={{ width: width, height: height }}
      >
        <div className="text-center popoverCard_title">
          <label>
            <strong className={`${title_class}`}>{title}</strong>
          </label>
        </div>
        <OverlayTrigger
          trigger="click"
          placement={placement}
          overlay={content}
          show={showPopover}
          onHide={() => setShowPopover(false)}
        >
          <Button className={`${btn_class}`} onClick={togglePopover}>
            {img_path ? (
              <img
                src={img_path}
                className={`img-fluid ${img_class}`}
                alt="Avatar"
              />
            ) : (
              text_content
            )}
          </Button>
        </OverlayTrigger>
      </section>
    </>
  );
};

PopoverCard.propTypes = {
  content: PropTypes.element.isRequired, // Tipo de dato: elemento React
  img_path: PropTypes.string,
  text_content: PropTypes.string,
  btn_class: PropTypes.string,
  img_class: PropTypes.string,
  placement: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  title: PropTypes.string,
  title_class: PropTypes.string,
  container_class: PropTypes.string,
};

export default PopoverCard;
