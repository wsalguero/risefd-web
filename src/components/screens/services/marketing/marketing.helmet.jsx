/* eslint-disable no-unused-vars */
import React from "react";
import { Helmet } from "react-helmet";

const MarketingHelmet = () => {
  return (
    <>
      {" "}
      <Helmet>
        <title>Digital Marketing Services | Rise: Functional Development</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Unlock the potential of your business with Rise FD's digital marketing services. Our strategies and solutions are designed to boost your online presence and drive growth."
        />
        <meta
          name="keywords"
          content="digital marketing, Rise FD, online marketing, SEO, SEM, social media marketing, content marketing, digital strategy"
        />
        <meta name="author" content="Rise FD" />
        <meta
          property="og:title"
          content="Digital Marketing Services | Rise FD"
        />
        <meta
          property="og:description"
          content="Unlock the potential of your business with Rise FD's digital marketing services. Our strategies and solutions are designed to boost your online presence and drive growth."
        />
        <meta
          property="og:image"
          content="/src/assets/images/logos/logo bg.webp"
        />
        <meta property="og:type" content="website" />
        <meta
          name="twitter:title"
          content="Digital Marketing Services | Rise FD"
        />
        <meta name="instagram:name" content="rise.dev" />
        <meta
          name="twitter:description"
          content="Unlock the potential of your business with Rise FD's digital marketing services. Our strategies and solutions are designed to boost your online presence and drive growth."
        />
        <meta name="twitter:image" content="URL_OF_YOUR_SHARE_IMAGE" />
      </Helmet>
    </>
  );
};

export default MarketingHelmet;
