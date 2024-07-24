/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import CybersecurityHelmet from "./cybersecurity.helmet";
import "./cybersecurity.screen.css";

import img1 from "../../../../assets/images/icons/cibersecimg.webp";
import { Link } from "react-router-dom";
import { FaBullhorn, FaCode, FaLock } from "react-icons/fa";

const CybersecurityScreen = () => {
  return (
    <>
      <CybersecurityHelmet />
      <section className="md:px-16 container px-6 mb-5">
        <div className="md:flex md:items-start md:space-x-8 md:px-16 mt-5 text-start pt-28 mb-6">
          <div className="md:w-2/3">
            <h1 className="text-4xl font-bold mb-4 text-black">
              Cybersecurity Services
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              Protecting your business from cyber threats
            </p>
            <hr />
            <p className="text-md mb-6 text-gray-500 mt-2">
              We offer comprehensive cybersecurity solutions designed to
              safeguard your business from a wide range of cyber threats. Our
              expert team employs the latest technologies and best practices to
              ensure your data and systems are protected 24/7. Whether you need
              network security, endpoint protection, or cloud security, we have
              the expertise to keep your business secure.
            </p>
            <Link to="/contact">
              <button className="button-csservices type1 shadow"></button>
            </Link>
          </div>
          <div className="md:w-1/3">
            <img
              className="w-full shadow-lg max-w-sm"
              src={img1}
              alt="Cybersecurity"
            />
          </div>
        </div>

        <section className="services-section py-16 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 p-4 md:p-8 ">
            {/* Antivirus y Antimalware */}
            <div className="group overflow-hidden bg-neutral-50 rounded bg-gradient-to-tr from-purple-800 via-purple-700 to-purple-500 text-gray-50">
              <div className="before:duration-700 before:absolute before:w-28 before:h-28 before:bg-transparent before:blur-none before:border-8 before:opacity-50 before:rounded-full before:-left-4 before:-top-12 w-64 h-48 flex flex-col justify-between relative z-10 group-hover:before:top-28 group-hover:before:left-44 group-hover:before:scale-125 group-hover:before:blur">
                <div className="text p-3 flex flex-col justify-evenly h-full">
                  <span className="font-bold text-2xl service-card-title">
                    Antivirus & Antimalware
                  </span>
                  <p className="service-card-subtitle">
                    Protects your devices from malicious software and threats.
                  </p>
                </div>
              </div>
            </div>

            {/* Firewall */}
            <div className="group overflow-hidden bg-neutral-50 rounded bg-gradient-to-tr from-purple-800 via-purple-700 to-purple-500 text-gray-50">
              <div className="before:duration-700 before:absolute before:w-28 before:h-28 before:bg-transparent before:blur-none before:border-8 before:opacity-50 before:rounded-full before:-left-4 before:-top-12 w-64 h-48 flex flex-col justify-between relative z-10 group-hover:before:top-28 group-hover:before:left-44 group-hover:before:scale-125 group-hover:before:blur">
                <div className="text p-3 flex flex-col justify-evenly h-full">
                  <span className="font-bold text-2xl service-card-title">
                    Firewall
                  </span>
                  <p className="service-card-subtitle">
                    Controls incoming and outgoing network traffic to prevent
                    unauthorized access.
                  </p>
                </div>
              </div>
            </div>

            {/* Copia de Seguridad */}
            <div className="group overflow-hidden bg-neutral-50 rounded bg-gradient-to-tr from-purple-800 via-purple-700 to-purple-500 text-gray-50">
              <div className="before:duration-700 before:absolute before:w-28 before:h-28 before:bg-transparent before:blur-none before:border-8 before:opacity-50 before:rounded-full before:-left-4 before:-top-12 w-64 h-48 flex flex-col justify-between relative z-10 group-hover:before:top-28 group-hover:before:left-44 group-hover:before:scale-125 group-hover:before:blur">
                <div className="text p-3 flex flex-col justify-evenly h-full">
                  <span className="font-bold text-2xl service-card-title">
                    Backup
                  </span>
                  <p className="service-card-subtitle">
                    Regularly backs up critical data to secure locations.
                  </p>
                </div>
              </div>
            </div>

            {/* Gestión de Contraseñas */}
            <div className="group overflow-hidden bg-neutral-50 rounded bg-gradient-to-tr from-purple-800 via-purple-700 to-purple-500 text-gray-50">
              <div className="before:duration-700 before:absolute before:w-28 before:h-28 before:bg-transparent before:blur-none before:border-8 before:opacity-50 before:rounded-full before:-left-4 before:-top-12 w-64 h-48 flex flex-col justify-between relative z-10 group-hover:before:top-28 group-hover:before:left-44 group-hover:before:scale-125 group-hover:before:blur">
                <div className="text p-3 flex flex-col justify-evenly h-full">
                  <span className="font-bold text-2xl service-card-title">
                    Password Management
                  </span>
                  <p className="service-card-subtitle">
                    Stores and generates secure passwords for your accounts.
                  </p>
                </div>
              </div>
            </div>

            {/* Actualización de Software */}
            <div className="group overflow-hidden bg-neutral-50 rounded bg-gradient-to-tr from-purple-800 via-purple-700 to-purple-500 text-gray-50">
              <div className="before:duration-700 before:absolute before:w-28 before:h-28 before:bg-transparent before:blur-none before:border-8 before:opacity-50 before:rounded-full before:-left-4 before:-top-12 w-64 h-48 flex flex-col justify-between relative z-10 group-hover:before:top-28 group-hover:before:left-44 group-hover:before:scale-125 group-hover:before:blur">
                <div className="text p-3 flex flex-col justify-evenly h-full">
                  <span className="font-bold text-2xl service-card-title">
                    Software Updates
                  </span>
                  <p className="service-card-subtitle">
                    Keeps your systems up to date with the latest security
                    patches.
                  </p>
                </div>
              </div>
            </div>

            {/* Capacitación en Conciencia de Seguridad */}
            <div className="group overflow-hidden bg-neutral-50 rounded bg-gradient-to-tr from-purple-800 via-purple-700 to-purple-500 text-gray-50">
              <div className="before:duration-700 before:absolute before:w-28 before:h-28 before:bg-transparent before:blur-none before:border-8 before:opacity-50 before:rounded-full before:-left-4 before:-top-12 w-64 h-48 flex flex-col justify-between relative z-10 group-hover:before:top-28 group-hover:before:left-44 group-hover:before:scale-125 group-hover:before:blur">
                <div className="text p-3 flex flex-col justify-evenly h-full">
                  <span className="font-bold text-xl service-card-title">
                    Security Awareness Training
                  </span>
                  <p className="service-card-subtitle">
                    Educates employees on best security practices.
                  </p>
                </div>
              </div>
            </div>

            {/* Seguridad de la Red Wi-Fi */}
            <div className="group overflow-hidden bg-neutral-50 rounded bg-gradient-to-tr from-purple-800 via-purple-700 to-purple-500 text-gray-50">
              <div className="before:duration-700 before:absolute before:w-28 before:h-28 before:bg-transparent before:blur-none before:border-8 before:opacity-50 before:rounded-full before:-left-4 before:-top-12 w-64 h-48 flex flex-col justify-between relative z-10 group-hover:before:top-28 group-hover:before:left-44 group-hover:before:scale-125 group-hover:before:blur">
                <div className="text p-3 flex flex-col justify-evenly h-full">
                  <span className="font-bold text-2xl service-card-title">
                    Wi-Fi Security
                  </span>
                  <p className="service-card-subtitle">
                    Ensures secure configuration of your Wi-Fi network.
                  </p>
                </div>
              </div>
            </div>

            {/* Control de Acceso */}
            <div className="group overflow-hidden bg-neutral-50 rounded bg-gradient-to-tr from-purple-800 via-purple-700 to-purple-500 text-gray-50">
              <div className="before:duration-700 before:absolute before:w-28 before:h-28 before:bg-transparent before:blur-none before:border-8 before:opacity-50 before:rounded-full before:-left-4 before:-top-12 w-64 h-48 flex flex-col justify-between relative z-10 group-hover:before:top-28 group-hover:before:left-44 group-hover:before:scale-125 group-hover:before:blur">
                <div className="text p-3 flex flex-col justify-evenly h-full">
                  <span className="font-bold text-2xl service-card-title">
                    Access Control
                  </span>
                  <p className="service-card-subtitle">
                    Restricts access to data and systems based on user roles.
                  </p>
                </div>
              </div>
            </div>

            {/* Monitoreo Básico de la Red */}
            <div className="group overflow-hidden bg-neutral-50 rounded bg-gradient-to-tr from-purple-800 via-purple-700 to-purple-500 text-gray-50">
              <div className="before:duration-700 before:absolute before:w-28 before:h-28 before:bg-transparent before:blur-none before:border-8 before:opacity-50 before:rounded-full before:-left-4 before:-top-12 w-64 h-48 flex flex-col justify-between relative z-10 group-hover:before:top-28 group-hover:before:left-44 group-hover:before:scale-125 group-hover:before:blur">
                <div className="text p-3 flex flex-col justify-evenly h-full">
                  <span className="font-bold text-2xl service-card-title">
                    Network Monitoring
                  </span>
                  <p className="service-card-subtitle">
                    Detects suspicious activities on your network.
                  </p>
                </div>
              </div>
            </div>

            {/* Seguridad de Correo Electrónico */}
            <div className="group overflow-hidden bg-neutral-50 rounded bg-gradient-to-tr from-purple-800 via-purple-700 to-purple-500 text-gray-50">
              <div className="before:duration-700 before:absolute before:w-28 before:h-28 before:bg-transparent before:blur-none before:border-8 before:opacity-50 before:rounded-full before:-left-4 before:-top-12 w-64 h-48 flex flex-col justify-between relative z-10 group-hover:before:top-28 group-hover:before:left-44 group-hover:before:scale-125 group-hover:before:blur">
                <div className="text p-3 flex flex-col justify-evenly h-full">
                  <span className="font-bold text-2xl service-card-title">
                    Email Security
                  </span>
                  <p className="service-card-subtitle">
                    Protects against phishing and other email threats.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="md:px-16">
          <div className="overview-section py-16 bg-gray-100 text-center md:px-16">
            <div className="content mx-auto">
              <h2 className="text-3xl font-bold mb-4">Overview</h2>
              <p className="text-lg">
                At Rise FD, we offer a comprehensive suite of cybersecurity
                services designed to protect your business from a variety of
                cyber threats. Our expert team uses cutting-edge technology and
                industry best practices to ensure your data and systems are
                secure 24/7.
              </p>
            </div>
          </div>
        </div>

        <section className="benefits-section py-16 text-center">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-4">Benefits</h2>
            <ul className="list-disc list-inside text-lg mb-8 list-none">
              <li>Enhanced protection against cyber threats</li>
              <li>Improved compliance with industry standards</li>
              <li>24/7 monitoring and support</li>
            </ul>
            <div className="d-block mt-12">
              <p className="text-lg text-gray-700 mt-4">
                Can't find what you're looking for? Explore our other services
                below.
              </p>
              <div className="container_cards mt-3">
                <Link to={"/services/development"}>
                  <div data-text="Software services" className="glass">
                    <svg
                      viewBox="0 0 640 512"
                      height="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"></path>
                    </svg>
                  </div>
                </Link>

                <Link to={"/services/digital-marketing"}>
                  <div data-text="Digital Marketing" className="glass">
                    <FaBullhorn size="1em" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default CybersecurityScreen;
