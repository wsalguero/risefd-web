/* eslint-disable no-unused-vars */
import React from "react";
import { ContactScreen } from "../components/screens";
import { Nav } from "../components";
import Footer from "../components/footer/footer";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Rise: Functional Development</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Get in touch with Rise FD, a full-service digital agency specializing in web development, design, cybersecurity, and digital marketing. We're here to help you elevate your business."
        />
        <meta
          name="keywords"
          content="Contact Rise FD, web development, web design, cybersecurity, digital marketing, digital services, SaaS solutions, software development, digital agency"
        />
        <meta name="author" content="Rise FD" />
        <meta
          property="og:title"
          content="Contact Rise FD - Full-Service Digital Agency"
        />
        <meta
          property="og:description"
          content="Get in touch with specialists in web development, design, cybersecurity, and digital marketing. Elevate your business with our exceptional services."
        />
        <meta
          property="og:image"
          content="/src/assets/images/logos/logo bg.webp"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Rise FD" />
        <meta name="instagram:name" content="rise.dev" />
        <meta
          name="twitter:title"
          content="Contact Rise FD - Full-Service Digital Agency"
        />
        <meta
          name="twitter:description"
          content="Get in touch with specialists in web development, design, cybersecurity, and digital marketing. Elevate your business with our exceptional services."
        />
      </Helmet>
      <Nav />
      <ContactScreen />
      <Footer />
    </>
  );
};

export default Contact;
