"use client";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaCode, FaCloud, FaBullhorn } from "react-icons/fa";
import Link from "next/link";
import "./nav.css";
import { BiDownArrow } from "react-icons/bi";

const navLinksObj = [
    { title: "Products", path: "/products" },
    { title: "About us", path: "/about-us" },
    { title: "Contact", path: "/contact" },
];

const servicesSubmenu = [
    {
        title: "Custom Development", icon: <FaCode />, path: "/services/custom-development",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur porro voluptatum perspiciatis distinctio beatae nesciunt atque, non veritatis ducimus provident, amet corporis, illum dolorum! Consequatur nulla possimus voluptatum quia asperiores!",

        submenu: [
            { title: "Web Development", icon: <FaCode />, path: "/services/custom-development/web-development" },
            { title: "Mobile Development", icon: <FaCode />, path: "/services/custom-development/mobile-development" },
            { title: "Game Development", icon: <FaCode />, path: "/services/custom-development/game-development" },
        ],
    },
    {
        title: "SaaS Solutions", icon: <FaCloud />, path: "/services/saas-solutions",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur porro voluptatum perspiciatis distinctio beatae nesciunt atque, non veritatis ducimus provident, amet corporis, illum dolorum! Consequatur nulla possimus voluptatum quia asperiores!",
    },
    {
        title: "Digital Marketing", icon: <FaBullhorn />, path: "/services/digital-marketing",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur porro voluptatum perspiciatis distinctio beatae nesciunt atque, non veritatis ducimus provident, amet corporis, illum dolorum! Consequatur nulla possimus voluptatum quia asperiores!",
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
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            setIsMobile(screenWidth <= 768);
        };

        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            if (!isMobile) {
                setVisible(prevScrollPos > currentScrollPos);
            } else {
                setVisible(true); // Mantener siempre visible en dispositivos móviles
            }
            setPrevScrollPos(currentScrollPos);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos, isMobile]);


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
                <Link href={"/"}>
                    <label htmlFor="logo-navBrand">Rise FD</label>
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
                            <section className="submenu mt-2">
                                <ul className="top-full left-0 bg-white text-black shadow-lg rounded-md">
                                    {servicesSubmenu.map((service, index) => (
                                        <li key={index} className="px-6 py-4 hover:bg-gray-100 flex items-center submenu__item">
                                            <div className="service__container flex flex-row items-center justify-between">
                                                <div className="flex flex-col">
                                                    <span className="service__title text-lg font-semibold text-gray-800">{service.title}</span>
                                                    <p className="service__description text-sm text-gray-500 mt-2">
                                                        {service.description}
                                                    </p>
                                                </div>
                                                <div className="service__iconContainer flex items-center justify-center bg-gray-200 rounded-full p-3">
                                                    <Link href={service.path} className="text-gray-600 hover:text-gray-800">
                                                        {service.icon}
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </div>
                    )}
                </li>

                {navLinksObj.map((item, index) => (
                    <li key={index} className="list__Item md:px-6 mx-2 py-2 md:py-0">
                        <Link href={item.path} className="hover:text-blue-500 transition">
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>

            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="menuMobile__button inline-flex items-center p-2 w-10 h-10 justify-center text-white rounded-lg focus:outline-none transition-transform duration-300"
                aria-controls="navbar"
                aria-expanded={isMenuOpen}
            >
                {isMenuOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
            </button>
        </nav>
    );
};

export default Nav;
