/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Nav } from "../../components";
import Footer from "../../components/footer/footer";

const Layout_main = () => {
  return (
    <main>
      <Nav />
      <Outlet></Outlet>
      <Footer></Footer>
    </main>
  );
};

export default Layout_main;
