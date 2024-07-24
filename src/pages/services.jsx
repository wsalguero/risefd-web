/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ServicesScreen } from "../components/screens";
import { Nav } from "../components";
import Footer from "../components/footer/footer";

const Services = () => {
  const location = useLocation();

  return (
    <>
      <Nav />
      {location.pathname === "/services" && <ServicesScreen />}
      {location.pathname === "/services/" && <ServicesScreen />}
      <Outlet />
      <Footer />
    </>
  );
};

export default Services;
