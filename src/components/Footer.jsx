import React, { useState } from 'react';
import {FaArrowRight} from "react-icons/fa";

function Footer() {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        // Handle subscription logic here
        console.log('Subscribed:', email);
        setEmail('');
    };

    return (
        <footer className="relative  dark-background ">
            <div
                className="absolute bg-purple-950 inset-0 -z-10"
                style={{
                    backgroundImage: 'url("/images/footer.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
            </div>
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                {/* Main Footer Content - 3 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">

                    {/* Column 1: Logo & Subscribe */}
                    <div className="space-y-6">
                        {/* Logo */}
                        <div>
                            <img
                                src="/WiT_Logo/footerlogo.png"
                                alt="WithinTech Rwanda"
                                className="h-20 w-auto mb-4"
                            />
                        </div>

                        {/* Subscribe Form */}
                        <div>
                            <form onSubmit={handleSubscribe} className="flex">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    required
                                    className="flex-1 px-4 py-3 bg-white border  rounded-l-lg text-black placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-[#FF3F00] focus:border-transparent"
                                />
                                <button
                                    type="submit"
                                    className="px-6 py-3  bg-[#FF3F00] text-white rounded-r-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                                >
                                   <FaArrowRight />
                                </button>
                            </form>
                            <p className="text-sm  mt-3">
                                Get updates on programs, events, and opportunities at WithinTech
                            </p>
                        </div>
                    </div>

                    {/* Column 2: Useful Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">
                            Useful Links
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="#about"
                                    className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-300 group"
                                >
                                    <span className="flex items-center gap-2">
                                        <span className="w-0 h-0.5 bg-[#FF3F00] group-hover:w-4 transition-all duration-300"></span>
                                        About
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-300 group"
                                >
                                    <span className="flex items-center gap-2">
                                        <span className="w-0 h-0.5 bg-[#FF3F00] group-hover:w-4 transition-all duration-300"></span>
                                        Contact Us
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#impact"
                                    className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-300 group"
                                >
                                    <span className="flex items-center gap-2">
                                        <span className="w-0 h-0.5 bg-[#FF3F00] group-hover:w-4 transition-all duration-300"></span>
                                        Impact
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#gallery"
                                    className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-300 group"
                                >
                                    <span className="flex items-center gap-2">
                                        <span className="w-0 h-0.5 bg-[#FF3F00] group-hover:w-4 transition-all duration-300"></span>
                                        Gallery
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Contact Us */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">
                            Contact Us
                        </h3>
                        <div className="space-y-4">
                            {/* Address */}
                            <div className="flex items-start gap-3">
                                <p className="text-gray-300 text-sm leading-relaxed">
                                   Kigali,Rwanda
                                </p>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center gap-3">
                                <a
                                    href="tel:+250123456789"
                                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                                >
                                    +250 123 456 789
                                </a>
                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-3">

                                <a
                                    href="mailto:info@withintechrwanda.org"
                                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                                >
                                    info@withintechrwanda.org
                                </a>
                            </div>

                            {/* Social Media Icons */}
                            <div className="pt-4">
                                <p className="text-sm text-gray-400 mb-3">Follow Us</p>
                                <div className="flex gap-3">
                                    {/* LinkedIn */}
                                    <a
                                        href="https://linkedin.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-[#FF3F00] hover:to-[#FF3F00] flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                                    >
                                        <svg
                                            className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                        </svg>
                                    </a>

                                    {/* Twitter */}
                                    <a
                                        href="https://twitter.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-[#FF3F00] hover:to-[#FF3F00] flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                                    >
                                        <svg
                                            className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                        </svg>
                                    </a>

                                    {/* Facebook */}
                                    <a
                                        href="https://facebook.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-[#FF3F00] hover:to-[#FF3F00] flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                                    >
                                        <svg
                                            className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider Line */}
                <div className="border-t border-white/10 my-8"></div>

                {/* Copyright Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                    <p className={` w-full text-center text-[16px] font-semibold`}>
                        © {new Date().getFullYear()} WithinTech Rwanda. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;