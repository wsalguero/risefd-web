"use client"
import { presentations } from '@/consts';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import "./services.css"

const Page = () => {
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
        <main>
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
                            className={`animated-image slideIn`} // Keep the slideIn class for animation
                        />
                    </figure>
                </div>
            </section>

        </main>
    )
}

export default Page