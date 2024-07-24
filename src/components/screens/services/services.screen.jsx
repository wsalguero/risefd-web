/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import "./services.screen.css";
import CustomCard from "../../cards/customCard";

const ServicesScreen = () => {
  return (
    <main className="container md:px-16">
      <section className="md:px-16 mb-16 mt-16 md:pt-12">
        <div className="parallax-container-services md:px-16 mt-5">
          <div className="content">
            <h1 className="text-3xl md:text-4xl font-bold home-title-bann">
              Rise Above the Ordinary{" "}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-6 text-border-sm pt-2">
              Elevate your business with our exceptional services.{" "}
            </p>
          </div>
        </div>
      </section>

      <section className="services-section mb-16  md:px-16">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">
            Our Main Services
          </h2>
          <p className="text-xl text-gray-700">
            Rise is a full-service digital agency specializing in web
            development, design, cybersecurity and digital marketing. Our team
            of experienced professionals are committed to providing top-notch
            service and expertise to our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ps-4 md:ps-0">
          <div>
            <div className="card-main-service shadow">
              <p className="card-title">Cybersecurity</p>
              <p className="small-desc">
                Protect your business with Rise's comprehensive cybersecurity
                services. Our team of experts provides top-notch security
                solutions to safeguard your digital assets from threats and
                vulnerabilities. Trust us to keep your data secure and your
                operations running smoothly.
              </p>

              <div className="go-corner">
                <div className="go-arrow">→</div>
              </div>
            </div>
            <div className="pt-4 md:pl-20">
              <Link to={"/services/cybersecurity"}>
                <button className="btn-seemore-services">
                  <span className="btn-text-one">See More</span>
                  <span className="btn-text-two">About Cybersecurity!</span>
                </button>
              </Link>
            </div>
          </div>
          <div className="md:pt-6">
            <div className="card-main-service shadow">
              <p className="card-title">Software/Web & App Development</p>
              <p className="small-desc">
                At Rise, we specialize in crafting innovative software, web, and
                app solutions tailored to your unique business needs. Our team
                of experts leverages the latest technologies and industry best
                practices to deliver robust, scalable, and efficient solutions
                that drive growth and success.
              </p>

              <div className="go-corner">
                <div className="go-arrow">→</div>
              </div>
            </div>
            <div className="pt-4 md:pl-20">
              <Link to={"/services/digital-marketing"}>
                <button className="btn-seemore-services">
                  <span className="btn-text-one">See More</span>
                  <span className="btn-text-two btn-sd">
                    About Software/Web & App Development
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div>
            <div className="card-main-service shadow">
              <p className="card-title">Digital Marketing</p>
              <p className="small-desc">
                Boost your online presence with Rise's digital marketing
                services. Our team specializes in creating targeted campaigns
                that drive engagement, increase traffic, and convert leads into
                customers. Let us help you reach your audience and achieve your
                marketing goals.
              </p>

              <div className="go-corner">
                <div className="go-arrow">→</div>
              </div>
            </div>
            <div className="pt-4 md:pl-20">
              <Link to={"/services/development"}>
                <button className="btn-seemore-services">
                  <span className="btn-text-one">See More</span>
                  <span className="btn-text-two">About Digital Marketing!</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="saas-section mb-16 md:px-16">
        <div className="text-center mb-4 pb-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">
            SaaS from RiseFD
          </h2>
          <p className="text-xl text-gray-700">
            At Rise, we are dedicated to creating powerful SaaS applications
            designed to streamline your business processes and enhance
            productivity. Our innovative solutions are tailored to meet the
            unique needs of various industries, ensuring that you have the tools
            to succeed in a competitive landscape.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CustomCard
            wave_color="bg-green-500"
            title={"Hi-P"}
            description={
              "An advanced IP tracking and control system designed to enhance the security of business application logins, ensuring safe and authorized access."
            }
            phat_to={"#"}
          />
          <CustomCard
            wave_color="bg-violet-500"
            title={"RomboNook"}
            description={
              "A revolutionary e-commerce platform offering unprecedented features and capabilities, setting new standards in online retail."
            }
            phat_to={"#"}
          />
        </div>
      </section>

      <section className="cta-section mb-16 md:px-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
        <p className="text-2xl text-gray-700 mb-4">
          Ready to take your business to the next level? Contact us today to
          learn more about how our services can help you achieve your goals.
        </p>
        <Link to="/contact" className="flex justify-center">
          <button className="contactButton">
            Contact Us
            <div className="iconButton">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </button>
        </Link>
      </section>
    </main>
  );
};

export default ServicesScreen;
