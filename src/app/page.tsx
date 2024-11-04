"use client"
import Image from "next/image";
import "./home.css";
import flowBanner from "@/assets/images/home/flowBanner.png";
import flowBannerMobil from "@/assets/images/home/flowBannerMobil.png";
import textImg from "@/assets/images/home/img.png";
import { useEffect, useRef, useState } from "react";
import { FaUser } from "react-icons/fa";
import { mainServices, objTestimonials, presentations } from "@/consts";
import { RiArrowRightDoubleFill } from "react-icons/ri";


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

  return (
    <div className="">

      <section className="presentation__section" ref={presentationRef}>
        <div
          className="presentation__container"
          style={{ background: presentations[activeIndex].backgroundColor }}
        >
          <div className="px-5">
            <span className="presentationText__element">
              <h1>Rise: Functional Development</h1>
              <p className="typewriter">{presentations[activeIndex].description}</p>
            </span>
            <div className="changeBannerColor__container">
              {presentations.map((_, index) => (
                <span
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`banner-dot ${activeIndex === index ? "active__span" : ""}`}
                ></span>
              ))}
            </div>
          </div>
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
            <div className="image_bg image-wrapper" style={{ backgroundColor: presentations[activeIndex].figureBgColor }}>
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

      <section className="mainServices__section py-12 md:mx-24">
        <div className="mainServices__container grid grid-cols-1 md:grid-cols-3 gap-6">
          {mainServices.map((service, index) => (
            <div key={index} className="service-card bg-white rounded-lg shadow-md p-6 text-center hover:scale-105 duration-300">
              <div className="icon-container mb-4">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={50}
                  height={50}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-indigo-800">{service.title}</h3>
              <p className="text-gray-600">{service.text}</p>
            </div>
          ))}
        </div>

        <div className="servicesText__container">

          <span className="mr-4 p-4">
            <h2 className="servicesText__heading text-3xl font-bold leading-relaxed mb-2 md:mb-6">
              Leading Digital Innovation
            </h2>
            <p className="servicesText__paragraph text-gray-600 text-justify">
              At RiseFD, we stay at the forefront of technological trends, implementing innovative solutions built on solid, reliable standards. Our commitment is to continuously adapt to the ever-changing digital landscape, ensuring that your business not only stays updated but also moves forward with efficient, collaborative processes that drive digital transformation.
            </p>
            <a href="/services" className="flex justify-center items-center space-x-1">
              <strong className="">Read More</strong> <RiArrowRightDoubleFill />
            </a>
          </span>
        </div>
      </section>


      <section className="testBlog__Section justify-center items-center space-x-4 md:space-x-8 md:mx-24">

        <section className="testimonials__section rounded-lg shadow-lg md:pt-24 md:pb-12">
          <h2 className="text-center text-3xl font-bold testimonials__heading mt-4">What Our Clients Say?</h2>
          <div className="testimonials__divParent px-6 md:px-0 overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {objTestimonials.map((testimonial) => (
                <div key={testimonial.author} className="p-4">
                  <div className="bg-white p-9 space-y-3 md:overflow-hidden testimonial_card">
                    <div>
                      <FaUser className={`fill-${testimonial.avatar}-500 text-2xl`} />
                    </div>
                    <h1 className="font-bold text-xl flex items-center">
                      {testimonial.author}
                      <img
                        src={`https://flagcdn.com/w320/${testimonial.countryFlag}.png`}
                        alt={`${testimonial.countryFlag} flag`}
                        className="w-5 h-5 ml-2"
                      />
                    </h1>
                    <span className="text-sm text-gray-400 italic">{testimonial.company}</span>
                    <p className="text-sm text-zinc-500 leading-6">
                      "{testimonial.text}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="blog__section bg-gray-100 text-black rounded-lg shadow-lg md:pt-24 md:pb-12">
          <div className="container mx-auto">
            <h2 className="text-center text-3xl font-bold mb-12">Latest Insights from Our Experts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <article className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <img src="/path/to/image.jpg" alt="Article Title" className="rounded-md mb-4" />
                <h3 className="text-xl font-semibold mb-2">How AI is Transforming Software Development</h3>
                <p className="text-gray-600 mb-4">
                  Discover how artificial intelligence is reshaping the software development industry...
                </p>
                <a href="/blog/ai-transforming-software" className="text-indigo-700 hover:text-indigo-900 font-bold">
                  Read more →
                </a>
              </article>
            </div>
          </div>
        </section>
      </section>
      <section className="innovativeSection md:py-24 md:mx-24">
        <div className="innovative__container">
          <div className="text-container flex-1 space-y-4">
            <p className="text-lg md:text-2xl leading-relaxed innovativeSection__text">
              At our company, we focus on constantly innovating software development, seeking new ways in which people and technology can coexist in a harmonious ecosystem. Our goal is to optimize processes through intelligent automation, facilitating the integration of technological solutions that not only improve productivity, but also create an environment where people can coexist and thrive alongside these innovations.
            </p>
            <button className="cta-button">Discover more</button>
          </div>
        </div>
      </section>
    </div >
  );
}
