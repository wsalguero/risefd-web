"use client";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaCode, FaCloud, FaBullhorn, FaLaptopCode, FaMobileAlt, FaDesktop, FaClosedCaptioning, FaCloudscale, FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import "./nav.css";
import { BiDownArrow } from "react-icons/bi";
import Image from "next/image";
import Logo from "@/assets/images/logos/logo.png";

const navLinksObj = [
    { title: "Products", path: "/products" },
    { title: "About us", path: "/about-us" },
    { title: "Contact", path: "/contact" },
];

const servicesSubmenu = [
    {
        title: "Custom Development", icon: <FaCode />, path: "/services/custom-development",
        description: "Tailored software solutions to meet your unique business needs.",
        customClass: "customDev__li",
        submenu: [
            { title: "Web Development", icon: <FaLaptopCode />, path: "/services/custom-development/web-development" },
            { title: "Mobile Development", icon: <FaMobileAlt />, path: "/services/custom-development/mobile-development" },
            { title: "Desktop Development", icon: <FaDesktop />, path: "/services/custom-development/desktop-development" },
        ],
    },
    {
        title: "SaaS Solutions", icon: <FaCloud />, path: "/services/saas-solutions",
        description: "Cloud-based platforms to boost your business efficiency.",
    },
    {
        title: "Digital Marketing", icon: <FaBullhorn />, path: "/services/digital-marketing",
        description: "Drive growth with innovative digital marketing strategies.",
    },
];


const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const [hoveringMenu, setHoveringMenu] = useState(false);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (!hoveringMenu) {
            timer = setTimeout(() => {
                setIsSubMenuOpen(false);
            }, 2000); // 2 segundos de retraso antes de cerrar el menú
        }
        return () => clearTimeout(timer); // Limpiar el temporizador si el mouse vuelve antes de 2s
    }, [hoveringMenu]);

    const [isMobile, setIsMobile] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0); // Inicializado en 0 para evitar problemas en SSR
    const [visible, setVisible] = useState(true);

    const [pageName, setPageName] = useState("");

    useEffect(() => {
        // Verifica si `window` está disponible antes de acceder a él
        if (typeof window !== "undefined") {

            const handleResize = () => {
                const screenWidth = window.innerWidth;
                setIsMobile(screenWidth <= 768);
            };

            const handleScroll = () => {
                const currentScrollPos = window.pageYOffset;
                if (!isMobile) {
                    setVisible(prevScrollPos > currentScrollPos);
                } else {
                    setVisible(true);
                }
                setPrevScrollPos(currentScrollPos);
            };

            window.addEventListener("resize", handleResize);
            window.addEventListener("scroll", handleScroll);

            // const currentPath = location.pathname.toString();

            // // Encuentra el objeto que coincide con la ruta actual
            // const currentPage = navLinksObj.find(navItem => navItem.path === currentPath);

            // // Si se encuentra una coincidencia, establece el título
            // if (currentPage) {
            //     setPageName(currentPage.title);
            // }

            // Limpieza de eventos al desmontar el componente
            return () => {
                window.removeEventListener("resize", handleResize);
                window.removeEventListener("scroll", handleScroll);
            };


        }
    }, [prevScrollPos, isMobile, pageName]);

    return (
        <nav className="nav__element"
            style={{
                transform: visible ? "translateY(0)" : "translateY(-100%)",
                transition: "transform 0.3s ease-in-out",
                position: "fixed",
                top: 0,
                width: "100%",
                zIndex: 1000,
            }}>
            <div className="logoNav__container">
                <Link href={"/"} className="p-2 rounded">
                    <figure>
                        <Image
                            src={Logo}
                            alt="Logo Navbar"
                            className="logo_img"
                        />
                    </figure>
                    <span>
                        <label htmlFor="logo-navBrand">Rise FD</label>
                    </span>
                </Link>
            </div>


            <ul className={`listNav__element ${isMenuOpen ? "block" : "hidden"} md:flex md:flex-row`}>
                <li
                    className="list__Item px-2 py-2 md:py-0 relative services_li"
                    onMouseEnter={() => {
                        setIsSubMenuOpen(true);
                        setHoveringMenu(true);
                    }}
                    onMouseLeave={() => setHoveringMenu(false)}
                >
                    <span className="hover:text-blue-500 transition cursor-pointer flex justify-center items-center space-x-2">
                        <label>Services</label>
                        <BiDownArrow />
                    </span>
                    {isSubMenuOpen && (
                        <div
                            className="submenuServices__Container"
                            onMouseEnter={() => setHoveringMenu(true)}
                            onMouseLeave={() => setHoveringMenu(false)}
                        >
                            {!isMobile && (<section className="submenu mt-2">
                                <ul className="top-full left-0 rounded-md">

                                    {servicesSubmenu.map((service, index) => (
                                        <li key={index} className="px-6 py-4 flex items-start submenu__item">
                                            <div>
                                                <span className="submenu__linkContainer">
                                                    <Link href={service.path} className={`hover:text-blue-400 transition submenu__link ${service.customClass}`}>
                                                        <div className="submenu__linkContainerChild">
                                                            <div className="icon-container">
                                                                {service.icon}
                                                            </div>
                                                            <span className="service-title">{service.title}</span>
                                                        </div>
                                                    </Link>
                                                    <p className="submenu__p">
                                                        {service.description}
                                                    </p>
                                                </span>
                                                {service.submenu && (
                                                    <div className="submenu__container">
                                                        <ul className="submenu__list ">
                                                            {service.submenu.map((submenuItem, subindex) => (
                                                                <li key={subindex} className="submenu__item">
                                                                    <Link href={submenuItem.path} className="hover:text-blue-400 transition submenu-link-item">
                                                                        <div className="submenu_link_item_container">
                                                                            {submenuItem.icon}
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>
                                        </li>
                                    ))}

                                </ul>

                            </section>)}

                        </div>
                    )}
                </li>

                {navLinksObj.map((item, index) => (
                    <li key={index} className="list__Item md:px-6 mx-2 py-2 md:py-0">
                        <Link href={item.path} className="hover:text-blue-500 transition" onClick={() => setPageName(item.title)}>
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>

            {isMobile && (

                <div className="startNav__buttonContainer">
                    <Link href={"/contact"} className="ctaTalk-button px-8 py-4 bg-white text-indigo-800 font-semibold rounded-md shadow-lg hover:bg-indigo-700 hover:text-white transition-all duration-300 hover:scale-105">
                        Start Your Journey
                    </Link>
                </div>
            )}

            {!isMobile && (
                <>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="menuMobile__button inline-flex items-center p-2 w-10 h-10 justify-center text-white rounded-lg focus:outline-none transition-transform duration-300"
                        aria-controls="navbar"
                        aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
                    </button>
                </>
            )}

        </nav>
    );
};

export default Nav;
