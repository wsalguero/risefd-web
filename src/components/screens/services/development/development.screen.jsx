/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import DevelopmentHelmet from "./development.helmet";
import "./development.screen.css";
import { Link } from "react-router-dom";
import { FaBullhorn, FaLock } from "react-icons/fa";
import img1 from "../../../../assets/images/icons/sdservices.webp";
const SoftwareDevelopmentScreen = () => {
  return (
    <div>
      <DevelopmentHelmet />
      <section className="md:px-16 container px-6 mb-5">
        <div className="md:flex md:items-start md:space-x-8 md:px-16 mt-5 text-start pt-28 mb-6">
          <div className="md:w-2/3">
            <h1 className="text-4xl font-bold mb-4 text-black">
              Software/Web & App Development
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              Empowering Your Business with Innovative Solutions
            </p>
            <hr />
            <p className="text-md mb-6 text-gray-500 mt-2">
              At Rise FD, we specialize in creating custom software, web, and
              mobile applications tailored to meet your unique business needs.
              Our team of skilled developers and designers work collaboratively
              to deliver robust, scalable, and efficient solutions that drive
              growth and success.
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
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 p-4 md:p-8 ">
            {/* Desktop */}
            <div className="group overflow-hidden bg-neutral-50 rounded bg-gradient-to-tr from-green-600 via-green-400 to-green-300 text-gray-50">
              <div className="before:duration-700 before:absolute before:w-28 before:h-28 before:bg-transparent before:blur-none before:border-8 before:opacity-50 before:rounded-full before:-left-4 before:-top-12 w-64 h-48 flex flex-col justify-between relative z-10 group-hover:before:top-28 group-hover:before:left-44 group-hover:before:scale-125 group-hover:before:blur">
                <div className="text p-3 flex flex-col justify-evenly h-full">
                  <span className="font-bold text-2xl service-card-title">
                    PC Development
                  </span>
                  <p className="service-card-subtitle">
                    Building robust and efficient applications for desktop
                    environments.
                  </p>
                </div>
              </div>
            </div>

            {/* Movil */}
            <div className="group overflow-hidden bg-neutral-50 rounded bg-gradient-to-tr from-green-600 via-green-400 to-green-300 text-gray-50">
              <div className="before:duration-700 before:absolute before:w-28 before:h-28 before:bg-transparent before:blur-none before:border-8 before:opacity-50 before:rounded-full before:-left-4 before:-top-12 w-64 h-48 flex flex-col justify-between relative z-10 group-hover:before:top-28 group-hover:before:left-44 group-hover:before:scale-125 group-hover:before:blur">
                <div className="text p-3 flex flex-col justify-evenly h-full">
                  <span className="font-bold text-2xl service-card-title">
                    Mobile Development
                  </span>
                  <p className="service-card-subtitle">
                    Crafting user-friendly and high-performance mobile
                    applications.
                  </p>
                </div>
              </div>
            </div>

            {/* Web */}
            <div className="group overflow-hidden bg-neutral-50 rounded bg-gradient-to-tr from-green-600 via-green-400 to-green-300 text-gray-50">
              <div className="before:duration-700 before:absolute before:w-28 before:h-28 before:bg-transparent before:blur-none before:border-8 before:opacity-50 before:rounded-full before:-left-4 before:-top-12 w-64 h-48 flex flex-col justify-between relative z-10 group-hover:before:top-28 group-hover:before:left-44 group-hover:before:scale-125 group-hover:before:blur">
                <div className="text p-3 flex flex-col justify-evenly h-full">
                  <span className="font-bold text-2xl service-card-title">
                    Web Development
                  </span>
                  <p className="service-card-subtitle">
                    Creating responsive and dynamic websites tailored to your
                    needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="md:px-16">
          <div className="custom-section py-16 bg-gray-100 text-center md:px-16">
            <div className="content mx-auto">
              <h2 className="text-3xl font-bold mb-4">Custom Development</h2>
              <p className="text-lg">
                At Rise FD, we can work with any technology of your choice,
                ensuring custom development tailored to your specific
                requirements. Our expertise allows us to deliver solutions that
                align perfectly with your business goals.
              </p>
            </div>
          </div>
        </div>

        <section className="benefits-section py-16 text-center">
          <div className="container mx-auto">
            <div className="">
              <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
              <ul className="list-disc list-inside text-lg mb-8 list-none">
                <li>Custom solutions tailored to your business needs</li>
                <li>Flexible and scalable application architecture</li>
                <li>
                  Utilization of the latest technologies and best practices
                </li>
                <li>
                  Comprehensive testing to ensure high-quality deliverables
                </li>
                <li>Ongoing support and maintenance</li>
              </ul>{" "}
              <p className="text-lg text-gray-700 mt-4">
                We're passionate about helping businesses like yours succeed.
                Let's work together to develop innovative software solutions
                that drive growth and efficiency. Our team of experts is
                dedicated to providing you with the best technologies and
                practices to meet your unique business needs.
              </p>
              <p className="text-lg text-gray-700 my-4">
                Contact us today to learn more about our software development
                services and how we can help your business thrive with custom,
                scalable, and high-quality applications.
              </p>
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

                <Link to={"/services/digital-marketing"}>
                  <div data-text="Digital Marketing" className="glass">
                    <FaBullhorn size="1em" />
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

export default SoftwareDevelopmentScreen;
