import women from "@/assets/images/home/women.webp";
import womenandMen from "@/assets/images/home/wym.png";
import man from "@/assets/images/home/man.png";
import { FiBarChart, FiShield, FiUsers, FiZap } from "react-icons/fi";
import {
  FaBullhorn,
  FaChartLine,
  FaCloud,
  FaCode,
  FaDesktop,
  FaLaptopCode,
  FaMobileAlt,
  FaProjectDiagram,
  FaUserShield,
} from "react-icons/fa";
import { RiRobot2Line } from "react-icons/ri";

import icon_customDev from "@/assets/icons/custom-dev.png";

export const navLinksObj = [
  { title: "Products", path: "/products" },
  { title: "About us", path: "/about-us" },
  { title: "Contact", path: "/contact" },
];

export const servicesSubmenu = [
  {
    title: "Custom Development",
    icon: FaCode,
    path: "/services/custom-development",
    description:
      "Development of web, desktop and mobile software according to your needs",
    customClass: "customDev__li",
    submenu: [
      {
        title: "Web Development",
        icon: FaLaptopCode,
        path: "/services/custom-development/web-development",
      },
      {
        title: "Mobile Development",
        icon: FaMobileAlt,
        path: "/services/custom-development/mobile-development",
      },
      {
        title: "Desktop Development",
        icon: FaDesktop,
        path: "/services/custom-development/desktop-development",
      },
    ],
  },
  {
    title: "SaaS Solutions",
    icon: FaCloud,
    path: "/services/saas-solutions",
    description: "Cloud-based platforms to boost your business efficiency.",
  },
  {
    title: "Digital Marketing",
    icon: FaBullhorn,
    path: "/services/digital-marketing",
    description: "Drive growth with innovative digital marketing strategies.",
  },
  {
    title: "AI Integrations",
    icon: RiRobot2Line,
    path: "/services/ia-integrations",
    description:
      "Enable AI capabilities to improve your business processes and drive growth.",
  },
];

export const presentations = [
  {
    title: "Elevate Your Digital Presence",
    image: womenandMen,
    backgroundColor:
      "linear-gradient(135deg, rgba(240,255,245,1) 25%, rgba(229,255,237,1) 50%, rgba(208,255,223,1) 75%, rgba(189,255,208,1) 100%)",
    description:
      "Enhance communication and optimize your team’s performance with tailored software for your needs.",
    figureBgColor: "rgba(189,255,208,1)",
  },
  {
    title: "Streamline Your Workflow",
    image: women,
    backgroundColor:
      "linear-gradient(135deg, rgba(236,255,254,1) 25%, rgba(224,255,253,1) 50%, rgba(204,255,252,1) 75%, rgba(187,255,251,1) 100%)",
    description:
      "Join us on a journey to transform your ideas into reality and elevate your digital presence to new heights.",
    figureBgColor: "#b4fffa",
  },
  {
    title: "Unlock Your Potential",
    image: man,
    backgroundColor:
      "linear-gradient(135deg, rgba(232,255,247,1) 25%, rgba(204,255,237,1) 50%, rgba(194,255,234,1) 75%, rgba(134,255,212,1) 100%)",
    description:
      "Automate your processes and scale your business efficiently with our innovative software solutions.",
    figureBgColor: "#8ce3c4",
  },
];

export const objTestimonials = [
  {
    author: "Everett Collins",
    avatar: "usa",
    company: "Business Owner",
    text: "Working with Kam3 has completely transformed the way I manage my business. Their software solutions are tailored perfectly to our needs, making our processes more efficient and less time-consuming.",
    countryFlag: "us",
  },
  {
    author: "Eliza Monroe",
    avatar: "usa",
    company: "Operations Manager",
    text: "Kam3's software has streamlined our operations and increased our productivity. The team was fantastic in delivering a solution that exceeded our expectations.",
    countryFlag: "us",
  },
  {
    author: "Arvin Lagman",
    avatar: "ph",
    company: "Scrum Master",
    text: "The Kam3 platform has been a game-changer for our team's project management. The tools are intuitive and have significantly improved our workflow.",
    countryFlag: "ph",
  },
  {
    author: "Gabriel Estrada",
    avatar: "gt",
    company: "Administrative Director",
    text: "Kam3 has provided us with the tools necessary to elevate our administrative operations. Their software solutions have reduced human error and increased our overall efficiency.",
    countryFlag: "gt",
  },
];

export const mainServices = [
  {
    icon: FaProjectDiagram,
    title: "Collaborative Approach",
    text: "Our process emphasizes collaboration at every stage, ensuring transparency, efficiency, and alignment with our clients’ goals.",
  },
  {
    icon: FaChartLine,
    title: "Continuous Growth",
    text: "We believe in continuous improvement and growth, both for our solutions and our team, to stay ahead in a fast-paced tech landscape.",
  },
  {
    icon: FaUserShield,
    title: "Client-Focused Security",
    text: "Security is a priority in everything we build, ensuring our clients’ data and operations are protected as they scale and evolve.",
  },
];

export const benefits = [
  {
    title: "Reliable Performance",
    icon: FiShield,
    description:
      "Engineered for exceptional stability and high data traffic, ensuring your software runs seamlessly.",
  },
  {
    title: "Scalable Solutions",
    icon: FiBarChart,
    description:
      "Adaptable to your business growth, our solutions scale effortlessly to meet increasing demands.",
  },
  {
    title: "User-Centric Design",
    icon: FiUsers,
    description:
      "Intuitive interfaces and user-friendly experiences that cater to both small and large enterprises.",
  },
  {
    title: "High Efficiency",
    icon: FiZap,
    description:
      "Optimized to reduce development overhead while maintaining robust functionality and speed.",
  },
];

export const services = [
  {
    title: "Custom Development",
    icon: FaCode,
    description:
      "Tailored software solutions designed to meet your unique business needs, providing reliability and adaptability in a dynamic digital environment.",
  },
  {
    title: "SaaS Solutions",
    icon: FaCloud,
    description:
      "Scalable cloud-based platforms that grow with your business, giving you access to essential tools without the need for complex infrastructure.",
  },
  {
    title: "Digital Marketing",
    icon: FaBullhorn,
    description:
      "Comprehensive digital marketing strategies to enhance your online presence, targeting growth and engagement across various platforms.",
  },
  {
    title: "AI Integrations",
    icon: RiRobot2Line,
    description:
      "Advanced AI solutions that streamline processes, improve decision-making, and boost operational efficiency to keep your business ahead of the curve.",
  },
];
