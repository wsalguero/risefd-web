/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ServicesScreen } from "../components/screens";
import { Nav } from "../components";
import Footer from "../components/footer/footer";
import { Helmet } from "react-helmet";

const Services = () => {
  const location = useLocation();

  return (
    <>
      <Helmet>
        <title>Our Services | Rise: Functional Development</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Explore the wide range of services offered by Rise FD, including web development, design, cybersecurity, and digital marketing."
        />
        <meta
          name="keywords"
          content="Rise FD, web development, design, cybersecurity, digital marketing, services, SaaS solutions, software development"
        />
        <meta name="author" content="Rise FD" />
        <meta property="og:title" content="Our Services | Rise FD" />
        <meta
          property="og:description"
          content="Explore the wide range of services offered by Rise FD, including web development, design, cybersecurity, and digital marketing."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Rise FD" />
        <meta name="instagram:name" content="rise.dev" />
        <meta
          name="twitter:description"
          content="Specialists in web development, design, cybersecurity, and digital marketing. Elevate your business with our exceptional services."
        />
      </Helmet>
      <Nav />
      {(location.pathname === "/services" ||
        location.pathname === "/services/") && <ServicesScreen />}
      <Outlet />
      <Footer />
    </>
  );
};

export default Services;
