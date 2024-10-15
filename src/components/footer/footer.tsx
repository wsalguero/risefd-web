import React from 'react'
import { FaEnvelope, FaFacebookSquare, FaInstagram, FaLinkedin, FaPhoneAlt, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="footer-section bg-purple-900 text-white py-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                <div className="footer-contact-info flex flex-col items-center md:items-start space-y-4">
                    <div className="flex items-center space-x-2">
                        <FaPhoneAlt className="text-white" />
                        <span>(+502) 5583-6903</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaEnvelope className="text-white" />
                        <span>risefuncdev@gmail.com</span>
                    </div>
                </div>

                <div className="footer-social-icons flex space-x-6">
                    <a href="#" className="hover:text-gray-300">
                        <FaFacebookSquare className="text-white text-2xl" />
                    </a>
                    <a href="#" className="hover:text-gray-300">
                        <FaTwitter className="text-white text-2xl" />
                    </a>
                    <a href="#" className="hover:text-gray-300">
                        <FaLinkedin className="text-white text-2xl" />
                    </a>
                    <a href="#" className="hover:text-gray-300">
                        <FaInstagram className="text-white text-2xl" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
