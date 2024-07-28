/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import MarketingHelmet from "./marketing.helmet";
import { Link } from "react-router-dom";
import { FaBullhorn, FaLock } from "react-icons/fa";
import img1 from "../../../../assets/images/icons/marketing.webp";
import "./marketing.screen.css";

const MarketingScreen = () => {
  return (
    <div>
      <MarketingHelmet />
      <section className="md:px-16 container px-6 mb-5">
        <div className="md:flex md:items-start md:space-x-8 md:px-16 mt-5 text-start pt-28 mb-6">
          <div className="md:w-2/3">
            <h1 className="text-4xl font-bold mb-4 text-black">
              Digital Marketing
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              Elevating Your Brand in the Digital Landscape
            </p>
            <hr />
            <p className="text-md mb-6 text-gray-500 mt-2">
              At Rise FD, we specialize in providing comprehensive digital
              marketing services designed to boost your online presence and
              drive engagement. Our team of marketing experts leverages the
              latest strategies and tools to create tailored campaigns that
              align with your business goals and deliver measurable results.
            </p>

            <Link to="/contact">
              <button className="button-csservices type1 shadow"></button>
            </Link>
          </div>
          <div className="md:w-1/3">
            <img
              className="w-full shadow-lg max-w-sm"
              src={img1}
              alt="Software/Web & App Development"
            />
          </div>
        </div>

        <section className="services-section py-16 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 p-4 md:p-8">
            {/* SEO */}
            <div className="group overflow-hidden bg-neutral-50 rounded bg-gradient-to-tr from-blue-600 via-blue-400 to-blue-300 text-gray-50">
              <div className="before:duration-700 before:absolute before:w-28 before:h-28 before:bg-transparent before:blur-none before:border-8 before:opacity-50 before:rounded-full before:-left-4 before:-top-12 w-64 h-48 flex flex-col justify-between relative z-10 group-hover:before:top-28 group-hover:before:left-44 group-hover:before:scale-125 group-hover:before:blur">
                <div className="text p-3 flex flex-col justify-evenly h-full">
                  <span className="font-bold text-2xl service-card-title">
                    SEO Optimization
                  </span>
                  <p className="service-card-subtitle">
                    Enhancing your website's visibility on search engines to
                    drive organic traffic.
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Marketing */}
            <div className="group overflow-hidden bg-neutral-50 rounded bg-gradient-to-tr from-blue-600 via-blue-400 to-blue-300 text-gray-50">
              <div className="before:duration-700 before:absolute before:w-28 before:h-28 before:bg-transparent before:blur-none before:border-8 before:opacity-50 before:rounded-full before:-left-4 before:-top-12 w-64 h-48 flex flex-col justify-between relative z-10 group-hover:before:top-28 group-hover:before:left-44 group-hover:before:scale-125 group-hover:before:blur">
                <div className="text p-3 flex flex-col justify-evenly h-full">
                  <span className="font-bold text-2xl service-card-title">
                    Social Media Marketing
                  </span>
                  <p className="service-card-subtitle">
                    Creating and managing engaging content on social media
                    platforms to boost your brand presence.
                  </p>
                </div>
              </div>
            </div>

            {/* Content Marketing */}
            <div className="group overflow-hidden bg-neutral-50 rounded bg-gradient-to-tr from-blue-600 via-blue-400 to-blue-300 text-gray-50">
              <div className="before:duration-700 before:absolute before:w-28 before:h-28 before:bg-transparent before:blur-none before:border-8 before:opacity-50 before:rounded-full before:-left-4 before:-top-12 w-64 h-48 flex flex-col justify-between relative z-10 group-hover:before:top-28 group-hover:before:left-44 group-hover:before:scale-125 group-hover:before:blur">
                <div className="text p-3 flex flex-col justify-evenly h-full">
                  <span className="font-bold text-2xl service-card-title">
                    Content Marketing
                  </span>
                  <p className="service-card-subtitle">
                    Developing valuable content to attract and retain a
                    clearly-defined audience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="md:px-16">
          <div className="mrk-section py-16 bg-gray-100 text-center md:px-16">
            <div className="content mx-auto">
              <h2 className="text-3xl font-bold mb-4">
                Tailored Marketing Solutions
              </h2>
              <p className="text-lg">
                At Rise FD, we offer personalized marketing solutions designed
                to meet your specific business needs. Whether it's SEO, social
                media marketing, or content creation, our team of experts will
                work with you to develop a strategy that aligns perfectly with
                your business goals.
              </p>
            </div>
          </div>
        </div>

        <section className="benefits-section py-16 text-center">
          <div className="container mx-auto">
            <div className="">
              <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
              <ul className="list-disc list-inside text-lg mb-8 list-none">
                <li>
                  Custom marketing strategies tailored to your business goals
                </li>
                <li>Enhanced online visibility and brand recognition</li>
                <li>Data-driven campaigns for maximum ROI</li>
                <li>Comprehensive analytics and reporting</li>
                <li>Ongoing optimization and support</li>
              </ul>
              <div className="d-block mt-12">
                <p className="text-lg text-gray-700 mt-4">
                  We're passionate about helping businesses like yours succeed.
                  Let's work together to elevate your brand and achieve your
                  marketing goals. Our team of experts is dedicated to providing
                  you with the best strategies and tools to grow your business
                  and reach new heights.
                </p>
                <p className="text-lg text-gray-700 my-4">
                  Contact us today to learn more about our digital marketing
                  services and how we can help your business thrive in the
                  digital landscape.
                </p>
              </div>
            </div>

            <hr />
            <div className="d-block mt-12">
              <p className="text-lg text-gray-700 mt-4">
                Can't find what you're looking for? Explore our other services
                below.
              </p>
              <div className="container_cards mt-3">
                <Link to={"/services/cybersecurity"}>
                  <div data-text="Cybersecurity" className="glass">
                    <FaLock size="1em" />
                  </div>
                </Link>

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
              </div>
            </div>
          </div>
        </section>
      </section>{" "}
    </div>
  );
};

export default MarketingScreen;
