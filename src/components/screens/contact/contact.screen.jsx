/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";
import Select from "react-select";
import Swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaMailBulk,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

import "./contact.screen.css";
import { WiShowers } from "react-icons/wi";

const ContactScreen = () => {
  const form = useRef();
  const recaptchaRef = useRef();
  const [recaptchaVerified, setRecaptchaVerified] = useState(false);

  const serviceOptions = [
    { value: "cybersecurity", label: "Cybersecurity" },
    { value: "software_development", label: "Software Development" },
    { value: "app_development", label: "Apps Development" },
    { value: "digital_marketing", label: "Digital Marketing" },
  ];

  const sendEmail = (e) => {
    e.preventDefault();

    if (!recaptchaVerified) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Please verify that you are not a robot.",
      });
      return;
    }

    try {
      emailjs
        .sendForm(
          "service_1zt1i3h", // reemplaza con tu Service ID
          "template_3c2ng3b", // reemplaza con tu Template ID
          form.current,
          "AYVHEP4P6aAxvhdfb" // reemplaza con tu User ID
        )
        .then(
          (result) => {
            console.log(result.text);
            Swal.fire({
              icon: "success",
              title: "Message Sent",
              text: "Your message has been sent successfully!",
            });
          },
          (error) => {
            console.log(error.text);
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "Failed to send message, please try again later.",
            });
          }
        );
    } catch (error) {
      console.error("Error sending email:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to send message, please try again later.",
      });
    }

    e.target.reset();
    recaptchaRef.current.reset();
    setRecaptchaVerified(false);
  };

  const onReCAPTCHAChange = (value) => {
    if (value) {
      setRecaptchaVerified(true);
    } else {
      setRecaptchaVerified(false);
    }
  };
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
    <main className="md:px-16 container md:px-16 px-6 mb-5 md:mb-0">
      <section className="mb-16 mt-16 md:px-16 pt-12">
        <div className="items-center md:pt-16">
          <div className="parallax-container md:px-16 mt-5">
            <div className="content">
              <h1 className={`text-3xl md:text-4xl font-bold home-title-bann`}>
                Rise Begins with a Conversation{" "}
              </h1>
              <p className="text-lg md:text-xl text-gray-500 mb-6">
                Let's discuss your vision and make it a reality.{" "}
              </p>
              <div className="md:flex justify-center mt-4">
                <div className="group relative">
                  <button className="text-shadow ">
                    <FaWhatsapp className="text-shadow w-8 h-8 hover:scale-125 duration-200 hover:text-green-500" />
                  </button>
                  <span
                    className="absolute top-14 left-[50%] -translate-x-[50%] 
                  z-20 origin-left scale-0 px-3 rounded-lg border 
                  border-gray-300 bg-white py-2 text-sm font-bold
                  shadow-md transition-all duration-300 ease-in-out 
                  group-hover:scale-100 text-black"
                  >
                    (+502)55836903
                  </span>
                </div>
                <div className="group relative ">
                  <button>
                    <CiMail className="text-shadow w-8 h-8 hover:scale-125 duration-200 hover:text-blue-500" />
                  </button>
                  <span
                    className="absolute top-14 left-[50%] -translate-x-[50%] 
                  z-20 origin-left scale-0 px-3 rounded-lg border 
                  border-gray-300 bg-white py-2 text-sm font-bold
                  shadow-md transition-all duration-300 ease-in-out 
                  group-hover:scale-100 text-black"
                  >
                    risefuncdev@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="md:flex md:justify-center">
        <div className="">
          <div className="text-center py-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Social Media
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Follow us on our social media platforms to stay updated with our
              latest projects, services, and news.
            </p>
          </div>

          <div className="flex justify-center align-bottom">
            <div className="main">
              <div className="up">
                <button className="card1">
                  <svg
                    className="instagram icon_position"
                    fillRule="nonzero"
                    height="30px"
                    width="30px"
                    viewBox="0,0,256,256"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      style={{ mixBlendMode: "normal" }}
                      textAnchor="none"
                      fontSize="none"
                      fontWeight="none"
                      fontFamily="none"
                      strokeDashoffset="0"
                      strokeDasharray=""
                      strokeMiterlimit="10"
                      strokeLinejoin="miter"
                      strokeLinecap="butt"
                      strokeWidth="1"
                      stroke="none"
                      fillRule="nonzero"
                    >
                      <g transform="scale(8,8)">
                        <path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z"></path>
                      </g>
                    </g>
                  </svg>
                </button>
                <button className="card2">
                  <svg
                    className="twitter icon_position2"
                    height="30px"
                    width="30px"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path>
                  </svg>
                </button>
              </div>
              <div className="down">
                <button className="card3">
                  <svg
                    className="github icon_position"
                    height="30px"
                    width="30px"
                    viewBox="0 0 30 30"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                  </svg>
                </button>
                <button className="card4">
                  <svg
                    className="discord icon_position2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="30px"
                    height="30px"
                  >
                    <path d="M40,12c0,0-4.585-3.588-10-4l-0.488,0.976C34.408,10.174,36.654,11.891,39,14c-4.045-2.065-8.039-4-15-4s-10.955,1.935-15,4c2.346-2.109,5.018-4.015,9.488-5.024L18,8c-5.681,0.537-10,4-10,4s-5.121,7.425-6,22c5.162,5.953,13,6,13,6l1.639-2.185C13.857,36.848,10.715,35.121,8,32c3.238,2.45,8.125,5,16,5s12.762-2.55,16-5c-2.715,3.121-5.857,4.848-8.639,5.815L33,40c0,0,7.838-0.047,13-6C45.121,19.425,40,12,40,12z M17.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C21,28.209,19.433,30,17.5,30z M30.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C34,28.209,32.433,30,30.5,30z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full max-w-lg px-2 py-4 md:py-0 mt-4 md:mt-0 ml-0 md:ml-16"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="from_name"
            >
              Name
              <small className="text-red-800">*</small>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="from_name"
              type="text"
              placeholder="Your name"
              name="from_name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="from_email"
            >
              Email <small className="text-red-800">*</small>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="from_email"
              type="email"
              placeholder="Your email"
              name="from_email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone_number"
            >
              Phone Number <small className="text-red-800">*</small>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone_number"
              type="text"
              placeholder="Your phone number"
              name="phone_number"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="service"
            >
              Service of Interest <small className="text-red-800">*</small>
            </label>
            <Select
              id="service"
              name="service_of_interest"
              options={serviceOptions}
              className="basic-single"
              classNamePrefix="select"
              placeholder="Select a service"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message <small className="text-zinc-100">(optional)</small>
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Your message"
              name="message"
            />
          </div>
          <div className="mb-4 d-none">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LcXABYqAAAAAGv8CTGIzPPL1tEH_q7YR5UfEqRB" // reemplaza con tu clave de sitio
              onChange={onReCAPTCHAChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="btn-sendForm">
              <div class="svg-wrapper-1">
                <div class="svg-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                    ></path>
                  </svg>
                </div>
              </div>
              <span>Send</span>
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default ContactScreen;
