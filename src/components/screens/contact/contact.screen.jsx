/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";
import Select from "react-select";
import Swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha";
import {
  FaFacebook,
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
    <main className="md:px-16 container md:px-16 px-6 mb-5">
      <section className="mb-16 mt-16 md:px-16 pt-12">
        <div className="items-center md:pt-16">
          <div className="parallax-container md:px-16 mt-5">
            <div className="content">
              <h1 className="text-3xl md:text-4xl font-bold home-title-bann">
                Rise Begins with a Conversation
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-6 text-border-sm pt-2">
                Let's discuss your vision and make it a reality.
              </p>
              <div className="md:flex justify-center mt-4">
                <div className="group relative md:pr-4 mb-3">
                  <a
                    href="https://wa.me/50255836903"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-shadow ">
                      <FaWhatsapp className="text-shadow w-8 h-8 hover:scale-125 duration-200 hover:text-green-500" />
                    </button>
                  </a>
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
                  <a href="mailto:risefuncdev@gmail.com">
                    <button>
                      <CiMail className="text-shadow w-8 h-8 hover:scale-125 duration-200 hover:text-blue-500" />
                    </button>
                  </a>
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
      <section className="md:flex md:justify-center md:px-20">
        <div className="">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Connected with Rise FD
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Follow us on our social media platforms to stay updated with our
              latest projects, services, and news. Join our community and be
              part of our journey towards innovation and excellence.
            </p>
          </div>

          <div className="flex justify-center align-bottom mb-4 ">
            <div className="main">
              <div className="up">
                <a
                  href="https://www.instagram.com/rise.dev/"
                  target="_blank"
                  rel="noreferrer"
                >
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
                </a>
                <a
                  href="https://www.facebook.com/risefuncdev"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="card2">
                    <FaFacebook className="twitter icon_position" />
                  </button>
                </a>
              </div>
              <div className="down">
                <a
                  href="https://x.com/rise_fd_devs"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="card3">
                    <FaXTwitter className="github icon_position" />
                  </button>
                </a>
                <button className="card4">
                  <FaLinkedin className="discord icon_position2" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-lg">
          {isMobile && (
            <div className="text-center pt-2">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Get in Touch with Us
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                We'd love to hear from you! Whether you have a question, need a
                quote for a service, or just want to say hello, fill out the
                form below. Our team is ready to assist you and bring your
                vision to life with our expertise.
              </p>
            </div>
          )}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="px-2 py-4 md:py-0 mt-4 md:mt-0 ml-0 md:ml-16 bg-violet-300 rounded shadow md:pr-16"
          >
            <div className="mb-4 px-2">
              <label
                className="block text-gray-900 text-sm font-bold mb-2"
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
            <div className="mb-4 px-2">
              <label
                className="block text-gray-900 text-sm font-bold mb-2"
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
            <div className="mb-4 px-2">
              <label
                className="block text-gray-900 text-sm font-bold mb-2"
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
            <div className="mb-4 px-2">
              <label
                className="block text-gray-900 text-sm font-bold mb-2"
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
            <div className="mb-4 px-2">
              <label
                className="block text-gray-900 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message <small className="text-stone-600">(optional)</small>
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
            <div className="flex items-center justify-center">
              <button className="btn-sendForm">
                <div className="svg-wrapper-1">
                  <div className="svg-wrapper">
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
        </div>
      </section>
    </main>
  );
};

export default ContactScreen;
