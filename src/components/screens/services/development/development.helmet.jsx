/* eslint-disable no-unused-vars */
import React from "react";
import { Helmet } from "react-helmet";

const DevelopmentHelmet = () => {
  return (
    <>
      {" "}
      <Helmet>
        <title>
          Software/Web & Apps Development | Rise: Functional Development
        </title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Discover the innovative software and web development services offered by Rise FD. Our team of experts leverages the latest technologies to build robust and scalable solutions."
        />
        <meta
          name="keywords"
          content="software development, web development, Rise FD, SaaS solutions, software solutions, web applications"
        />
        <meta name="author" content="Rise FD" />
        <meta
          property="og:title"
          content="Software/Web Development | Rise FD"
        />
        <meta
          property="og:description"
          content="Discover the innovative software and web development services offered by Rise FD. Our team of experts leverages the latest technologies to build robust and scalable solutions."
        />
        <meta
          property="og:image"
          content="/src/assets/images/logos/logo bg.webp"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Rise FD" />
        <meta name="instagram:name" content="rise.dev" />
        <meta
          name="twitter:description"
          content="Discover the innovative software and web development services offered by Rise FD. Our team of experts leverages the latest technologies to build robust and scalable solutions."
        />
        <meta name="twitter:image" content="URL_OF_YOUR_SHARE_IMAGE" />
      </Helmet>
    </>
  );
};

export default DevelopmentHelmet;
