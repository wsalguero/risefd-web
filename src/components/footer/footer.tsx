import {
    FaPhoneAlt,
    FaEnvelope,
    FaFacebookSquare,
    FaTwitter,
    FaLinkedin,
    FaInstagram,
    FaMapMarkerAlt,
} from "react-icons/fa";
import Image from "next/image";
import Logo from "@/assets/images/logos/logoKame.png";

import "./footer.css";

export default function Footer() {
    return (
        <footer className="footer-section bg-green-100 text-black py-12 mt-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                {/* Logo and Brief Info */}
                <div className="flex flex-col items-center md:items-start space-y-2">
                    <div className="flex items-center space-x-2">
                        <span className="text-xl">Kam3</span>
                        <Image src={Logo} alt="Kam3 Logo" width={50} height={50} />
                    </div>
                    <p className="text-sm text-gray-600 text-center md:text-left max-w-xs">
                        Kam3 is a technology company specializing in software solutions, digital marketing, and SaaS solutions.
                    </p>
                </div>

                {/* Contact Information */}
                <div className="footer-contact-info flex flex-col items-center md:items-start space-y-4">
                    <div className="flex items-center space-x-2">
                        <FaPhoneAlt />
                        <span>(+502) 5583-6903</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaEnvelope />
                        <span>info@kam3.com</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaMapMarkerAlt />
                        <span>Guatemala City, Guatemala</span>
                    </div>
                </div>

                {/* Social Media Links */}
                <div className="footer-social-icons flex space-x-6">
                    <a href="#" className="hover:text-gray-500">
                        <FaFacebookSquare className="text-2xl" />
                    </a>
                    <a href="#" className="hover:text-gray-500">
                        <FaTwitter className="text-2xl" />
                    </a>
                    <a href="#" className="hover:text-gray-500">
                        <FaLinkedin className="text-2xl" />
                    </a>
                    <a href="#" className="hover:text-gray-500">
                        <FaInstagram className="text-2xl" />
                    </a>
                </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gray-300 my-6"></div>

            {/* Bottom Section */}
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
                <p>&copy; {new Date().getFullYear()} Kam3. All rights reserved.</p>
                <p>Privacy Policy | Terms of Service</p>
            </div>
        </footer>
    );
}
