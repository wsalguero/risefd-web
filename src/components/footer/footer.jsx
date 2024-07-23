/* eslint-disable no-unused-vars */
import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-900 to-blue-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">About Rise FD</h4>
            <p className="md:pr-16">
              We are dedicated to providing innovative solutions in software
              development, cybersecurity, and digital marketing. Our mission is
              to empower businesses and individuals with cutting-edge technology
              and expert services.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul>
              <li className="mb-2">
                <a href="/services" className="hover:text-purple-300">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="/about" className="hover:text-purple-300">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="hover:text-purple-300">
                  Contact Us
                </a>
              </li>
              <li className="mb-2">
                <a href="/blog" className="hover:text-purple-300">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <p>Email: risefuncdev@gmail.com</p>
            <p>Phone:(+502) 5583-6903</p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.facebook.com/risefuncdev"
                className="text-white hover:text-purple-300"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://x.com/rise_fd_devs"
                className="text-white hover:text-purple-300"
              >
                <FaXTwitter size={24} />
              </a>
              <a href="#" className="text-white hover:text-purple-300">
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/rise.dev/"
                className="text-white hover:text-purple-300"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-10">
          <p>&copy; 2024 Rise FD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
