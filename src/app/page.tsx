"use client"
import Image from "next/image";
import "./home.css";
import flowBanner from "@/assets/images/home/flowBanner.png";
import flowBannerMobil from "@/assets/images/home/flowBannerMobil.png";
import textImg from "@/assets/images/home/img.png";
import { ReactNode, useEffect, useRef, useState } from "react";
import { FaBullseye, FaLightbulb, FaStar, FaTree, FaUser } from "react-icons/fa";
import { benefits, mainServices, objTestimonials, presentations } from "@/constants/consts";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import { IconType } from "react-icons";
import React from "react";
import Logo from "@/assets/images/logos/logoKame.png";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const presentationRef = useRef(null);
  const flowBannerRef = useRef(null);
  const testimonialsRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth <= 768);
        setIsLandscape(window.innerWidth > window.innerHeight);
      }
    };

    handleResize();
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5, // Trigger when 50% of the element is visible
    };

    const callback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slideIn");
        } else {
          entry.target.classList.remove("slideIn"); // Reset the animation when it's not in view
        }
      });
    };

    const observer = new IntersectionObserver(callback, observerOptions);

    if (presentationRef.current) observer.observe(presentationRef.current);
    if (flowBannerRef.current) observer.observe(flowBannerRef.current);
    if (testimonialsRef.current) observer.observe(testimonialsRef.current);

    return () => {
      if (presentationRef.current) observer.unobserve(presentationRef.current);
      if (flowBannerRef.current) observer.unobserve(flowBannerRef.current);
      if (testimonialsRef.current) observer.unobserve(testimonialsRef.current);
    };
  }, []);

  const [activeTab, setActiveTab] = useState("logo");

  const renderContent = () => {
    switch (activeTab) {
      case "logo":
        return (
          <>
            <div className="tabContent__imageContainer">
              <span className="textLogo__element">
                <label htmlFor="logo-navBrand">Kam3</label>
              </span>
              <figure>
                <Image
                  src={Logo}
                  alt="Logo kame in navigation menu"
                  className="tabContent__image"
                />
              </figure>

            </div>
          </>

        );
      case "mission":
        return (
          <>
            <div className="tab__MisionVision tabContent__text">
              <span>
                <strong>Our Mission</strong>
              </span>
              <p className="tabText__element">
                Empower businesses with innovative, efficient, and tailored software solutions that drive growth, streamline processes, and enhance digital presence. Our mission is to make advanced technology accessible and impactful for companies of all sizes.
              </p>
            </div>
          </>
        );
      case "vision":
        return (
          <>
            <div className="tab__MisionVision">
              <span>
                <strong>Our Vission</strong>
              </span>
              <p className="tabContent__text">
                To be a leading force in digital transformation, recognized for creating sustainable value and enabling success through cutting-edge AI integrations, SaaS platforms, and custom software solutions. We envision a future where our technology bridges gaps, builds connections, and fosters growth across industries.
              </p>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <section className="presentation__section" ref={presentationRef}>
        <div
          className="presentation__container"
          style={{ background: presentations[activeIndex].backgroundColor }}
        >

          <div className="px-5 textAndSpan__container">
            <span className="presentationText__element">
              <h1>{presentations[activeIndex].title}</h1>
              <p className="typewriter">{presentations[activeIndex].description}</p>
            </span>
            <div className="changeBannerColor__container">
              {presentations.map((_, index) => (
                <span
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`${activeIndex === index ? "active__span" : ""}`}
                ></span>
              ))}
            </div>
          </div>
          <div className="px-4 pt-12 md:px-0 md:pt-0 presentationImage__container">
            <figure
              className="presentationImage__element"
              style={{ backgroundColor: presentations[activeIndex].figureBgColor }}
            >
              <Image
                key={activeIndex}
                src={presentations[activeIndex].image}
                alt="flowchart banner img"
                className={`animated-image`} // Keep the slideIn class for animation
              />
            </figure>
          </div>
        </div>
      </section>
      <div className="md:px-20">
        <section className="benefits__Section md:px-24 px-12">
          <div className="benefits__container">
            {benefits.map((benefit, index) => (
              <div key={index} className="pt-8 benef__IndividualContainer">
                <div className="benefits__IconContainer" id={`benef-${index}`}>
                  <span
                    className="benefits__IconElement md:mb-3 "
                    style={{ backgroundColor: presentations[activeIndex].figureBgColor }}
                  >
                    {React.createElement(benefit.icon)}
                  </span>

                </div>
                <div className="benefits__textContainer">
                  <h2 className="benefits__title">{benefit.title}</h2>
                  <p className="benefits__description">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="ceoText__section md:px-24 px-12">
          <div className="ceoText__container">
            <div className="ceoText__card">
              <div className="ceoCard__header">
                <figure>
                  <FaStar className="ceoCard__icon" />
                </figure>
                <span className="ceoName__Element">
                  <h2 className="">
                    William Salguero (Wesc ~)
                  </h2>
                  <p className="ceoText__paragraph">
                    Founder/Ceo
                  </p>
                </span>
              </div>
              <div className="ceoCard__body">
                <p className="ceoText__paragraph">
                  "Kam3 isn’t just a company; it’s a family committed to connectivity and innovation, aiming to make a positive impact on people’s lives across sectors."
                </p>
              </div>
            </div>
          </div>

          <div className="tabWithLogo__Container">
            <div className="tabContent__container">{renderContent()}</div>
            <div className="tabButtons__container">
              <button onClick={() => setActiveTab("logo")} className={`tabButton ${activeTab === "logo" ? "activeTab" : ""}`}>
                <FaTree />
              </button>
              <button onClick={() => setActiveTab("mission")} className={`tabButton ${activeTab === "mission" ? "activeTab" : ""}`}>
                <FaBullseye />
              </button>
              <button onClick={() => setActiveTab("vision")} className={`tabButton ${activeTab === "vision" ? "activeTab" : ""}`}>
                <FaLightbulb />
              </button>
            </div>
          </div>
        </section>

        <section className="flow-banner-section md:mt-24" ref={flowBannerRef}>
          <div className="flow-banner__tittle lg:pt-8 text-center">
            <h2 className="flow-banner__heading">
              Maximize Your Business Potential with Smart Software Solutions
            </h2>
            <p className="flow-banner__paragraph">
              From automating repetitive tasks to enhancing decision-making, our tailored software
              solutions streamline processes, boost productivity, and help your business grow
              efficiently.
            </p>
          </div>
          <div className="flow-banner-container banner__columns2">
            {isMobile && !isLandscape ? (
              <Image
                src={flowBannerMobil}
                alt="flowchart banner mobil img"
                className="flow-banner-image animated_banner"
                layout="responsive"
                width={1200}
                height={600}
              />
            ) : (
              <Image
                src={flowBanner}
                alt="flowchart banner img"
                className="flow-banner-image animated_banner"
                layout="responsive"
                width={1200}
                height={600}
              />
            )}
          </div>
        </section>



        <section className="ctaTalk__Section md:py-24 md:mx-24 md:my-8 bg-gradient-to-r from-purple-600 to-indigo-800 text-white rounded-lg shadow-lg">
          <div className="ctaTalk__container flex flex-col md:flex-row justify-between items-center p-8">
            <div className="text-container flex-1 space-y-6 md:space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold leading-relaxed">
                Do you have a vision for your next big project?
              </h2>
              <p className="text-lg md:text-xl font-light">
                Let's bring it to life with innovative solutions tailored to your needs. Get in touch with us to start your journey.
              </p>
            </div>

            <div className="image-container flex flex-col justify-center items-center space-y-6 md:space-y-8">
              <div className="image_bg image-wrapper" >
                <Image alt="text info" src={textImg} className="rounded-lg" />
              </div>
              <a href="/contact">
                <button className="ctaTalk-button px-8 py-4 bg-white text-indigo-800 font-semibold rounded-md shadow-lg hover:bg-indigo-700 hover:text-white transition-all duration-300 hover:scale-105">
                  Start Your Journey
                </button>
              </a>
            </div>
          </div>
        </section>
      </div>



    </ >
  );
}
