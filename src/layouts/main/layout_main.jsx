/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Nav } from "../../components";
import Footer from "../../components/footer/footer";

const Layout_main = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsMobile(screenWidth <= 768); // Establece isMobile como true si el ancho de la ventana es menor o igual a 768px
    };

    handleResize();
    window.addEventListener("resize", handleResize); // Agrega un event listener para manejar el cambio de tamaño de la ventana

    return () => {
      window.removeEventListener("resize", handleResize); // Limpia el event listener al desmontar el componente para evitar fugas de memoria
    };
  }, []);

  return (
    <main>
      {isMobile && (
        <>
          <Outlet></Outlet>
          <Nav />
        </>
      )}
      {!isMobile && (
        <>
          <Nav />
          <Outlet></Outlet>
          <Footer></Footer>
        </>
      )}
    </main>
  );
};

export default Layout_main;
