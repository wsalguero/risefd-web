/* eslint-disable no-unused-vars */
import React from "react";
import { Helmet } from "react-helmet";

const CybersecurityHelmet = () => {
  return (
    <>
      <Helmet>
        <title>Cybersecurity Services | Rise: Functional Development</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Explore the comprehensive cybersecurity services offered by Rise FD. Our team of experts provides advanced solutions to protect your business from cyber threats."
        />
        <meta
          name="keywords"
          content="cybersecurity, Rise FD, cyber security, cyber protection, digital security, network security, data protection"
        />
        <meta name="author" content="Rise FD" />
        <meta property="og:title" content="Cybersecurity Services | Rise FD" />
        <meta
          property="og:description"
          content="Explore the comprehensive cybersecurity services offered by Rise FD. Our team of experts provides advanced solutions to protect your business from cyber threats."
        />
        <meta
          property="og:image"
          content="/src/assets/images/logos/logo bg.webp"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Cybersecurity Services | Rise FD" />
        <meta name="instagram:name" content="rise.dev" />
        <meta
          name="twitter:description"
          content="Explore the comprehensive cybersecurity services offered by Rise FD. Our team of experts provides advanced solutions to protect your business from cyber threats."
        />
        <meta name="twitter:image" content="URL_OF_YOUR_SHARE_IMAGE" />
      </Helmet>
    </>
  );
};

export default CybersecurityHelmet;
