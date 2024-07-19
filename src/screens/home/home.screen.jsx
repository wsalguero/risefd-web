/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

// images
import home_img from "../../assets/images/others/home-main-img.webp";
import iconSass from "../../assets/images/icons/iconSass.webp";
import img1 from "../../assets/images/others/img_rise_web.png";
import img2 from "../../assets/images/others/img_rise_web_2.png";
import img3 from "../../assets/images/others/img rise web ia.png";
import img4 from "../../assets/images/others/img rise web 3.png";
import logoToAbout from "../../assets/images/logos/transparent.png";

import "./home.screen.css";
import CustomCarrousel from "../../components/carousel/carousel";
import { Link, Navigate } from "react-router-dom";
import CustomCard from "../../components/cards/customCard";
import CustomCarousel from "../../components/carousel/carousel";
import { carousel_content } from "../../constants/constants";
import CardWithImgBtn from "../../components/cardWithImgBtn/cardWithImgBtn";
import { FaBullhorn, FaLock } from "react-icons/fa";

const HomeScreen = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsMobile(screenWidth <= 768); // Establece isMobile como true si el ancho de la ventana es menor o igual a 768px
    };

    handleResize(); // Ejecuta la función handleResize cuando se monta el componente para establecer el valor inicial de isMobile

    window.addEventListener("resize", handleResize); // Agrega un event listener para manejar el cambio de tamaño de la ventana

    return () => {
      window.removeEventListener("resize", handleResize); // Limpia el event listener al desmontar el componente para evitar fugas de memoria
    };
  }, []);

  return (
    <main className="HomeScreen__container container md:px-16">
      <section className="slider__container md:mb-16 mt-16">
        <div className="flex flex-col md:flex-row items-center content pt-16 container md:px-16 space-y-4 md:space-y-0 md:space-x-4">
          {" "}
          {isMobile ? (
            <>
              {" "}
              <div className="md:w-1/2">
                <div className="">
                  <CustomCarousel
                    items={carousel_content}
                    width={"350px"}
                    height="auto"
                  />
                </div>
              </div>
              <div className="">
                <div>
                  <h1
                    className={`text-3xl md:text-4xl font-bold mb-4 text-center`}
                  >
                    Let's explore other worlds
                  </h1>
                  <p className="text-lg md:text-xl text-gray-700 mb-6 text-justify">
                    Join us on a journey to transform your ideas into reality
                    and elevate your digital presence to new heights.
                  </p>
                </div>
                <div className="flex justify-content-center">
                  <button className="home_Button-banner flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300 mb-4 md:mb-0">
                    <svg
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path
                        d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <span>See more</span>
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="md:w-1/2">
                <div>
                  <h1
                    className={`text-3xl md:text-4xl font-bold mb-4 home-title-bann`}
                  >
                    Let's explore other worlds
                  </h1>
                  <p className="text-lg md:text-xl text-gray-700 mb-6">
                    Join us on a journey to transform your ideas into reality
                    and elevate your digital presence to new heights.
                  </p>
                </div>
                <div>
                  <button className="home_Button-banner flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300 mb-4 md:mb-0">
                    <svg
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path
                        d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <span>See more</span>
                  </button>
                </div>
              </div>
              <div className="">
                <div className="">
                  <CustomCarousel
                    items={carousel_content}
                    width={"600px"}
                    height="auto"
                  />
                </div>
              </div>
            </>
          )}
        </div>
        <div className="d-block mt-12">
          <div className="container_cards mt-3">
            <div data-text="Cybersecurity" className="glass">
              <FaLock size="1em" />
            </div>

            <div data-text="Software services" className="glass">
              <svg
                viewBox="0 0 640 512"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"></path>
              </svg>
            </div>
            <div data-text="Digital Marketing" className="glass">
              <FaBullhorn size="1em" />
            </div>
          </div>
        </div>
      </section>

      <section className="md:px-16">
        <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
          <img
            class=" md:rounded-none rounded-full mx-auto"
            src={logoToAbout}
            alt=""
          />
          <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <div className="text-neon-container">
                <h2 className="text-3xl font-bold text-neon mb-4">About Us</h2>
              </div>

              <div className="about_content px-16">
                <p className="text-white text-lg font-light">
                  We are a company that emerged from an idea, the idea of
                  providing solutions, tools, and support to people who face
                  daily processes and challenges. Our mission is to help
                  businesses and individuals overcome obstacles and achieve
                  their goals through innovative technology and expert services.
                  Whether it's through cutting-edge software solutions,
                  comprehensive cybersecurity measures, or effective digital
                  marketing strategies, we are dedicated to making a positive
                  impact on the digital landscape.
                </p>
              </div>
            </blockquote>
            <figcaption class="font-medium text-center p-4">
              <div class="mb-2">
                <p class="text-2xl italic font-bold text-gray-900 dark:text-gray-100">
                  Empowering Your Digital Future
                </p>
              </div>
              <div class="text-sky-500 dark:text-sky-400 text-lg">
                ~ William Salguero{" "}
                <small className="italic text-lg text-sky-600 dark:text-sky-600">
                  ( Wesc/Jadeezz )
                </small>
              </div>
              <div class="text-slate-800 dark:text-slate-500 text-md">
                CEO & Founder
              </div>
            </figcaption>
          </div>
        </figure>
      </section>

      <section className="container py-16">
        <div className="text-center pt-16">
          <h2 className="text-3xl font-bold">Why Rise FD?</h2>
        </div>
        {/* Right img */}
        <div className="md:flex md:flex-row flex-col-reverse md:justify-between items-center mb-3">
          <div className="md:w-1/2 p-4">
            <h3 className="text-xl font-bold mb-2 md:ps-16">
              Expert Consultancy
            </h3>
            <p className="md:ps-16">
              At Rise FD, we specialize in providing expert software consultancy
              services. Our team of highly skilled professionals is dedicated to
              delivering innovative and tailored solutions to meet your unique
              business needs.
            </p>
          </div>
          <div className="flex justify-center p-4">
            <img
              src={img1}
              alt="Expert Consultancy Icon"
              className="object-contain home__img-introsection md:pe-16"
            />
          </div>
        </div>
        {/* Left img */}
        <div className="md:flex md:flex-row flex-col md:justify-between items-center mb-3">
          <div className="flex justify-center md:ps-16">
            <img
              src={img2}
              alt="Comprehensive Cybersecurity Icon"
              className="object-contain home__img-introsection md:pe-16"
            />
          </div>
          <div className="md:w-1/2 p-4">
            <h3 className="text-xl font-bold mb-2 md:pe-16">
              Comprehensive Cybersecurity
            </h3>
            <p className="md:pe-16">
              Your security is our top priority. We offer comprehensive
              cybersecurity services to protect your digital assets from
              threats. Our team is equipped with the latest tools and knowledge
              to ensure your business remains secure.
            </p>
          </div>
        </div>
        {/* Right img */}
        <div className="md:flex md:flex-row flex-col-reverse md:justify-between items-center mb-3">
          <div className="md:w-1/2 p-4">
            <h3 className="text-xl font-bold mb-2 md:ps-16">
              Innovative Marketing Strategies
            </h3>
            <p className="md:ps-16">
              Our marketing services are designed to elevate your brand and
              increase your online presence. We employ innovative strategies
              that are data-driven and results-oriented, ensuring your marketing
              efforts are effective and impactful.
            </p>
          </div>
          <div className="flex justify-center p-4">
            <img
              src={img3}
              alt="Innovative Marketing Strategies Icon"
              className="object-contain home__img-introsection md:pe-16"
            />
          </div>
        </div>
        {/* Left img */}
        <div className="md:flex md:flex-row flex-col md:justify-between items-center mb-3">
          <div className="flex justify-center md:ps-16">
            <img
              src={img4}
              alt="Client-Centric Approach Icon"
              className="object-contain home__img-introsection md:pe-16"
            />
          </div>
          <div className="md:w-1/2 p-4">
            <h3 className="text-xl font-bold mb-2 md:pe-16">
              Client-Centric Approach
            </h3>
            <p className="md:pe-16">
              We believe in a client-centric approach, where your needs and
              goals are our top priority. We work closely with you to understand
              your business and provide customized solutions that drive results.
            </p>
          </div>
        </div>
        {/* Right img */}
        <div className="md:flex md:flex-row flex-col-reverse md:justify-between items-center mb-3">
          <div className="md:w-1/2 p-4">
            <h3 className="text-xl font-bold mb-2 md:ps-16">
              Modern Technologies
            </h3>
            <p className="md:ps-16">
              We utilize the latest technologies to ensure our solutions are
              cutting-edge and effective. Our team stays updated with industry
              trends and advancements, providing you with modern and efficient
              tools to meet your business needs.
            </p>
          </div>
          <div className="flex justify-center p-4">
            <img
              src={img4}
              alt="Modern Technologies Icon"
              className="object-contain home__img-introsection md:pe-16"
            />
          </div>
        </div>
        {/* Left img */}
        <div className="md:flex md:flex-row flex-col md:justify-between items-center mb-3">
          <div className="flex justify-center md:ps-16">
            <img
              src={img3}
              alt="AI Integration Icon"
              className="object-contain home__img-introsection md:pe-16"
            />
          </div>
          <div className="md:w-1/2 p-4">
            <h3 className="text-xl font-bold mb-2 md:pe-16">AI Integration</h3>
            <p className="md:pe-16">
              We integrate artificial intelligence into our systems, ensuring
              your business stays ahead of the curve. Our AI-driven solutions
              enhance efficiency and provide innovative ways to solve complex
              problems, aligning your business with the future.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomeScreen;
