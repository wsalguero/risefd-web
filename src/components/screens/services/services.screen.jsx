/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const ServicesScreen = () => {
  return (
    <main className="container md:px-16">
      <section className="md:px-16 mb-16 mt-16 md:pt-12">
        <h1 className="text-3xl font-bold text-gray-900 pt-16">Our Services</h1>
        <p className="text-lg text-gray-700 pt-4">
          Rise is a full-service digital agency specializing in web development,
          design, cybersecurity and digital marketing. Our team of experienced
          professionals are committed to providing top-notch service and
          expertise to our clients.
        </p>
      </section>

      <section className="services-section mb-16  md:px-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Our Main Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="service-card p-4 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold text-gray-900">Cybersecurity</h3>
            <p className="text-gray-700">
              Protect your business with our comprehensive cybersecurity
              services.
            </p>
            <Link
              to="/services/cybersecurity"
              className="text-blue-500 hover:text-blue-700"
            >
              Learn more
            </Link>
          </div>
          <div className="service-card p-4 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold text-gray-900">Web Development</h3>
            <p className="text-gray-700">
              Get a stunning website that performs perfectly across all devices.
            </p>
            <Link
              to="/services/web-development"
              className="text-blue-500 hover:text-blue-700"
            >
              Learn more
            </Link>
          </div>
          <div className="service-card p-4 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold text-gray-900">
              Digital Marketing
            </h3>
            <p className="text-gray-700">
              Increase your online presence and grow your business with our
              digital marketing services.
            </p>
            <Link
              to="/services/digital-marketing"
              className="text-blue-500 hover:text-blue-700"
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>

      <section className="saas-section mb-16 md:px-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Our SaaS Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="saas-card p-4 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold text-gray-900">Product 1</h3>
            <p className="text-gray-700">Description of SaaS product 1.</p>
            <Link
              to="/services/saas/product1"
              className="text-blue-500 hover:text-blue-700"
            >
              Learn more
            </Link>
          </div>
          <div className="saas-card p-4 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold text-gray-900">Product 2</h3>
            <p className="text-gray-700">Description of SaaS product 2.</p>
            <Link
              to="/services/saas/product2"
              className="text-blue-500 hover:text-blue-700"
            >
              Learn more
            </Link>
          </div>
          <div className="saas-card p-4 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold text-gray-900">Product 3</h3>
            <p className="text-gray-700">Description of SaaS product 3.</p>
            <Link
              to="/services/saas/product3"
              className="text-blue-500 hover:text-blue-700"
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>

      <section className="testimonials-section mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          What Our Clients Say
        </h2>
        <div className="testimonial p-4 bg-white shadow-md rounded-lg">
          <p className="text-gray-700 italic">
            "Rise helped us revamp our website and improve our online presence.
            Their team is professional and skilled. Highly recommend!"
          </p>
          <p className="text-gray-900 font-bold mt-4">
            - John Doe, CEO of Company
          </p>
        </div>
        <div className="testimonial p-4 bg-white shadow-md rounded-lg mt-4">
          <p className="text-gray-700 italic">
            "The cybersecurity solutions provided by Rise are top-notch. We feel
            much safer knowing our data is protected."
          </p>
          <p className="text-gray-900 font-bold mt-4">
            - Jane Smith, CTO of Business
          </p>
        </div>
      </section>

      <section className="cta-section mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>
        <p className="text-lg text-gray-700 mb-4">
          Ready to take your business to the next level? Contact us today to
          learn more about how our services can help you achieve your goals.
        </p>
        <Link
          to="/contact"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Contact Us
        </Link>
      </section>
    </main>
  );
};

export default ServicesScreen;
