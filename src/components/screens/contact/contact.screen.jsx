/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Select from "react-select";
import Swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha";

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

  return (
    <main className="md:px-16">
      <section className="mb-16 mt-16">
        <div className="md:flex md:justify-center items-center md:pt-16">
          <form ref={form} onSubmit={sendEmail} className="w-full max-w-lg">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="from_name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="from_name"
                type="text"
                placeholder="Your name"
                name="from_name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="from_email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="from_email"
                type="email"
                placeholder="Your email"
                name="from_email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phone_number"
              >
                Phone Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone_number"
                type="text"
                placeholder="Your phone number"
                name="phone_number"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="service"
              >
                Service of Interest
              </label>
              <Select
                id="service"
                name="service_of_interest"
                options={serviceOptions}
                className="basic-single"
                classNamePrefix="select"
                placeholder="Select a service"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Your message"
                name="message"
                required
              />
            </div>
            <div className="mb-4">
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
          <div className=""></div>
        </div>
      </section>
    </main>
  );
};

export default ContactScreen;
