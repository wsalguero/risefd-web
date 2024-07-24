/* eslint-disable no-unused-vars */
import React from "react";
import { HomeScreen } from "../components/screens";
import { Nav } from "../components";
import Footer from "../components/footer/footer";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Rise: Functional Development</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Rise FD is a full-service digital agency specializing in web development, design, cybersecurity, and digital marketing. Our team of experts is committed to providing top-notch service and expertise to our clients."
        />
        <meta
          name="keywords"
          content="Rise FD, web development, web design, cybersecurity, digital marketing, digital services, SaaS solutions, software development, digital agency"
        />
        <meta name="author" content="Rise FD" />
        <meta
          property="og:title"
          content="Rise FD - Full-Service Digital Agency"
        />
        <meta
          property="og:description"
          content="Specialists in web development, design, cybersecurity, and digital marketing. Elevate your business with our exceptional services."
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
      <HomeScreen />
      <Footer />
    </>
  );
};

export default Home;
