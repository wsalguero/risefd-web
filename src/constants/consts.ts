import women from "@/assets/images/home/women.webp";
import womenandMen from "@/assets/images/home/wym.png";
import man from "@/assets/images/home/man.png";
import { FiBarChart, FiShield, FiUsers, FiZap } from "react-icons/fi";
import {
  FaBullhorn,
  FaCloud,
  FaCode,
  FaDesktop,
  FaLaptopCode,
  FaMobileAlt,
} from "react-icons/fa";
import { RiRobot2Line } from "react-icons/ri";

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
    text: "Working with Rise has completely transformed the way I manage my business. Their software solutions are tailored perfectly to our needs, making our processes more efficient and less time-consuming.",
    countryFlag: "us",
  },
  {
    author: "Eliza Monroe",
    avatar: "usa",
    company: "Operations Manager",
    text: "Rise's software has streamlined our operations and increased our productivity. The team was fantastic in delivering a solution that exceeded our expectations.",
    countryFlag: "us",
  },
  {
    author: "Arvin Lagman",
    avatar: "ph",
    company: "Scrum Master",
    text: "The Rise platform has been a game-changer for our team's project management. The tools are intuitive and have significantly improved our workflow.",
    countryFlag: "ph",
  },
  {
    author: "Gabriel Estrada",
    avatar: "gt",
    company: "Administrative Director",
    text: "Rise has provided us with the tools necessary to elevate our administrative operations. Their software solutions have reduced human error and increased our overall efficiency.",
    countryFlag: "gt",
  },
];

export const mainServices = [
  {
    icon: "",
    title: "Custom Development",
    text: "We create personalized software solutions that perfectly fit the unique needs of your business.",
  },
  {
    icon: "",
    title: "Software as a Service (SaaS)",
    text: "We offer scalable SaaS solutions that allow your company to access essential tools without the need for additional infrastructure.",
  },
  {
    icon: "",
    title: "Digital Marketing",
    text: "We optimize your company's digital presence through digital marketing strategies that drive your online growth.",
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
