/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoRise from "../../assets/images/logos/transparent.png";

import "./nav.css";
import { FaArrowCircleUp, FaHome, FaServer } from "react-icons/fa";
import { RiTeamLine } from "react-icons/ri";
import { MdContactMail } from "react-icons/md";
import { Dropdown } from "react-bootstrap";

const Nav = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [activeItem, setActiveItem] = useState("home"); // Estado para el ítem activo

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsMobile(screenWidth <= 768);
    };

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (!isMobile) {
        setVisible(prevScrollPos > currentScrollPos);
      } else {
        setVisible(true); // Mantener siempre visible en dispositivos móviles
      }
      setPrevScrollPos(currentScrollPos);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, isMobile]);

  const handleItemClick = (item) => {
    setActiveItem(item); // Actualiza el estado del ítem activo al hacer clic
  };

  return (
    <div className="">
      <nav
        className={`nav__container md:py-0 ${
          isMobile ? "nav_mobile" : "nav_desktop"
        }`}
        style={{
          transform: visible ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.3s ease-in-out",
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1000,
        }}
      >
        {!isMobile && (
          <div className="nav__links-list">
            <div
              className={`nav__links ${
                activeItem === "home" ? "active_nav" : ""
              }`}
            >
              <Link
                to="/"
                id="home_url"
                onClick={() => handleItemClick("home")}
              >
                <div className="d-flex  align-items-center">
                  <img src={logoRise} alt="" className="img-fluid logo_img" />
                  <label htmlFor="">Rise FD</label>
                </div>
              </Link>
            </div>
          </div>
        )}
        <section className="nav__links-list">
          {isMobile && (
            <li
              className={`nav__links ${
                activeItem === "home" ? "active_nav" : ""
              }`}
            >
              {" "}
              <Link
                to="/"
                className="home_link-a"
                onClick={() => handleItemClick("home")}
              >
                <div className="d-flex  align-items-center">
                  <img src={logoRise} alt="" className="img-fluid logo_img" />
                  <label htmlFor="">Rise FD</label>
                </div>
              </Link>{" "}
            </li>
          )}
          <li
            className={`nav__links ${
              activeItem === "contact" ? "active_nav" : ""
            }`}
          >
            <Link to="/contact" onClick={() => handleItemClick("contact")}>
              {!isMobile && "Contact Us"} {isMobile && <MdContactMail />}
            </Link>
          </li>
          <li
            className={`nav__links ${
              activeItem === "blog" ? "active_nav" : ""
            }`}
          >
            <Link to="/blog" onClick={() => handleItemClick("blog")}>
              {!isMobile && "Rise Blog"} {isMobile && <FaArrowCircleUp />}
            </Link>
          </li>
          {isMobile ? (
            <Dropdown drop="up">
              <Dropdown.Toggle
                className={`bg-purple-900 border-none ${
                  activeItem === "services"
                    ? "bg-purple-700 text-white"
                    : "text-white"
                }`}
                id="dropdown-basic"
              >
                Services <FaServer />
              </Dropdown.Toggle>

              <Dropdown.Menu className="bg-purple-800">
                <Dropdown.Item
                  as={Link}
                  to="/services/service1"
                  onClick={() => handleItemClick("service1")}
                  className="text-white hover:bg-purple-700"
                >
                  Service 1
                </Dropdown.Item>
                <Dropdown.Item
                  as={Link}
                  to="/services/service2"
                  onClick={() => handleItemClick("service2")}
                  className="text-white hover:bg-purple-700"
                >
                  Service 2
                </Dropdown.Item>
                <Dropdown.Item
                  as={Link}
                  to="/services/service3"
                  onClick={() => handleItemClick("service3")}
                  className="text-white hover:bg-purple-700"
                >
                  Service 3
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <Dropdown>
              <Dropdown.Toggle
                className={`bg-purple-900 border-none ${
                  activeItem === "services"
                    ? "bg-purple-700 text-white"
                    : "text-white bg-purple-900 "
                }`}
                id="dropdown-basic"
              >
                {!isMobile && "Services"} {isMobile && <FaServer />}
              </Dropdown.Toggle>

              <Dropdown.Menu className="bg-purple-800">
                <Dropdown.Item
                  as={Link}
                  to="/services/service1"
                  onClick={() => handleItemClick("service1")}
                  className="text-white hover:bg-purple-700"
                >
                  Software Develompent
                </Dropdown.Item>
                <Dropdown.Item
                  as={Link}
                  to="/services/service2"
                  onClick={() => handleItemClick("service2")}
                  className="text-white hover:bg-purple-700"
                >
                  Maketing Services
                </Dropdown.Item>
                <Dropdown.Item
                  as={Link}
                  to="/services/service3"
                  onClick={() => handleItemClick("service3")}
                  className="text-white hover:bg-purple-700"
                >
                  Our Products
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
        </section>
      </nav>
    </div>
  );
};

export default Nav;
