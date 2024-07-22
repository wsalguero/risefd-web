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
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ContactScreen = () => {
  const form = useRef();
  const recaptchaRef = useRef();
  const [recaptchaVerified, setRecaptchaVerified] = useState(false);

  const serviceOptions = [
    { value: "cybersecurity", label: "Cybersecurity" },
    { value: "software_development", label: "Software Development" },
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
    <main className="md:px-16 container md:px-16 px-6">
      <section className="mb-16 mt-16">
        <div className="md:flex md:justify-center items-center md:pt-16">
          <div className="md:px-16">
            <div>
              <h2 className="text-3xl font-bold mb-4 pt-16 md:pt-0">
                Contact Us
              </h2>
              <p className="text-gray-900 text-lg">
                We'd love to hear from you. Please fill out the form
                {isMobile ? <>&nbsp;below </> : <>&nbsp;</>}and we'll get back
                to you soon.
              </p>
              <p className="text-gray-700 text-lg mt-4">
                You can visit our social networks to learn more about our
                projects, services and about us.
              </p>
              <div className="flex justify-center mt-4">
                <a
                  href="https://www.facebook.com/yourpage"
                  target="_blank"
                  className="text-blue-600 hover:text-blue-800 mr-4 h1"
                  rel="noreferrer"
                >
                  <FaFacebookSquare />
                </a>
                <a
                  href="https://www.instagram.com/yourpage"
                  target="_blank"
                  className="text-pink-600 hover:text-pink-800 mr-4 h1"
                  rel="noreferrer"
                >
                  <FaInstagramSquare />
                </a>
                <a
                  href="https://www.twitter.com/yourpage"
                  target="_blank"
                  className="text-black-400 hover:text-black-600 mr-4 h1"
                  rel="noreferrer"
                >
                  <FaXTwitter />
                </a>
                <a
                  href="https://www.linkedin.com/yourpage"
                  target="_blank"
                  className="text-blue-800 hover:text-blue-900 h1"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full max-w-lg px-2 py-4 md:py-0 mt-4 md:mt-0"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="from_name"
              >
                Name<small className="text-red-800">*</small>
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
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default ContactScreen;
