/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logoRise from "../../assets/images/logos/transparent.png";

import { FaArrowCircleUp, FaServer } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { Button, ButtonGroup, Dropdown } from "react-bootstrap";

import "./nav.css";

const Nav = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const location = useLocation(); // Hook para obtener la ubicación actual

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

  const getActiveClass = (path) => {
    return location.pathname === path ? "active_nav" : "";
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
            <div className={`nav__links ${getActiveClass("/")}`}>
              <Link to="/" id="home_url">
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
            <li className={`nav__links ${getActiveClass("/")}`}>
              <Link to="/" className="home_link-a">
                <div className="d-flex  align-items-center">
                  <img src={logoRise} alt="" className="img-fluid logo_img" />
                  <label htmlFor="">Rise FD</label>
                </div>
              </Link>
            </li>
          )}
          <li className={`nav__links ${getActiveClass("/contact")}`}>
            <Link to="/contact">
              {!isMobile && "Contact Us"} {isMobile && <MdContactMail />}
            </Link>
          </li>
          {isMobile ? (
            <Dropdown drop="up" as={ButtonGroup}>
              <Button
                className={`bg-purple-700 border-none pt-2 ${
                  getActiveClass("/services")
                    ? "bg-purple-700 text-white"
                    : "text-white bg-purple-900"
                }`}
                as={Link}
                to="/services"
              >
                <FaServer />
              </Button>
              <Dropdown.Toggle
                className={`bg-purple-700 border-none ${
                  getActiveClass("/services")
                    ? "bg-purple-700 text-white"
                    : "text-white bg-purple-900"
                }`}
                id="dropdown-basic"
              ></Dropdown.Toggle>

              <Dropdown.Menu className="bg-purple-300">
                <Dropdown.Item
                  as={Link}
                  to="/services/development"
                  className="text-black hover:bg-purple-700"
                >
                  Software/Web & App Development{" "}
                </Dropdown.Item>
                <Dropdown.Item
                  as={Link}
                  to="/services/digital-marketing"
                  className="text-black hover:bg-purple-700"
                >
                  Marketing Services
                </Dropdown.Item>
                <Dropdown.Item
                  as={Link}
                  to="/services/cybersecurity"
                  className="text-black hover:bg-purple-700"
                >
                  Cybersecurity
                </Dropdown.Item>

                <hr className="dropdown-divider px-2" />

                <small
                  className="text-black font-bold px-2 text-lg"
                  style={{ fontSize: "15px" }}
                >
                  Our Products
                </small>

                <Dropdown.Item
                  as={Link}
                  to="/services"
                  className="text-black hover:bg-purple-700"
                >
                  Hi-P
                </Dropdown.Item>
                <Dropdown.Item
                  as={Link}
                  to="/services"
                  className="text-black hover:bg-purple-700"
                >
                  RomboNook
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <Dropdown as={ButtonGroup}>
              <Button
                className={`bg-purple-700 border-none ${
                  getActiveClass("/services")
                    ? "bg-purple-700 text-white"
                    : "text-white bg-purple-900"
                }`}
                as={Link}
                to="/services"
              >
                Our Services
              </Button>

              <Dropdown.Toggle
                className={`bg-purple-700 border-none ${
                  getActiveClass("/services")
                    ? "bg-purple-700 text-white"
                    : "text-white bg-purple-900"
                }`}
                id="dropdown-basic"
              ></Dropdown.Toggle>

              <Dropdown.Menu className="bg-purple-300">
                <Dropdown.Item
                  as={Link}
                  to="/services/development"
                  className="text-black hover:bg-purple-700"
                >
                  Software/Web & App Development{" "}
                </Dropdown.Item>
                <Dropdown.Item
                  as={Link}
                  to="/services/digital-marketing"
                  className="text-black hover:bg-purple-700"
                >
                  Marketing Services
                </Dropdown.Item>
                <Dropdown.Item
                  as={Link}
                  to="/services/cybersecurity"
                  className="text-black hover:bg-purple-700"
                >
                  Cybersecurity
                </Dropdown.Item>

                <hr className="dropdown-divider px-2" />

                <small
                  className="text-black font-bold px-2 text-lg"
                  style={{ fontSize: "15px" }}
                >
                  Our Products
                </small>

                <Dropdown.Item
                  as={Link}
                  to="/services"
                  className="text-black hover:bg-purple-700"
                >
                  Hi-P
                </Dropdown.Item>
                <Dropdown.Item
                  as={Link}
                  to="/services"
                  className="text-black hover:bg-purple-700"
                >
                  RomboNook
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
