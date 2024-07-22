/* eslint-disable no-unused-vars */
import React from "react";
import { HomeScreen } from "../components/screens";
import { Nav } from "../components";
import Footer from "../components/footer/footer";

const Home = () => {
  return (
    <>
      <Nav />
      <HomeScreen />
      <Footer />
    </>
  );
};

export default Home;
