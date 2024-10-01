"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="xl:w-[98%] lg:w-[98%] md:w-[98%] sm:w-[98%] xs:w-[98%] mx-auto">
      <div className="xl:w-[98%] lg:w-[98%] md:w-[98%] sm:w-[98%] xs:w-[98%] mx-auto flex items-center justify-between px-2 mt-4">
        {/* Logo */}
        <div className="flex items-center w-[100px] h-[50px] gap-1 pr-6">
          <span className="text-[#091E4C] text-2xl font-semibold">
           <Link href="#Navbar">
            HRXpert
           </Link> 
           </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8">
          <a href="#powerful" className="text-black font-semibold">Powerful Features</a>
          <a href="#how" className="text-black font-semibold">How it Works</a>
          <a href="#faq" className="text-black font-semibold">FAQs</a>
          <a href="#pricing" className="text-black font-semibold">Pricing</a>
        </div>

        {/* Right-side Buttons */}
        <div className="hidden lg:flex space-x-4 items-center">
          <a
            href="#book"
            className="text-white bg-[#0F47A6] w-[150px] h-[40px] rounded-md flex items-center justify-center"
          >
            Book Free Demo
          </a>
        </div>

        {/* Hamburger Button for Small Screens */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 ml-1 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu-2"
          aria-expanded="true"
        >
          <span className="sr-only">Open menu</span>
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden ${isOpen ? "block" : "hidden"} bg-white w-full`}
      >
        <div className="flex flex-col items-start px-4 py-2 space-y-2">
          <a href="#platform" className="block w-full text-gray-700">Our Platform</a>
          <a href="#pricing" className="block w-full text-gray-700">Pricing</a>
          <a href="#solution" className="block w-full text-gray-700">Solution</a>
          <a href="#resources" className="block w-full text-gray-700">Resources</a>
          <a href="#about" className="block w-full text-gray-700">About</a>
          <a
            href="#login"
            className="text-[#0F47A6] bg-[#E6FCFF] w-[83px] h-[40px] rounded-md flex items-center justify-center"
          >
            Log In
          </a>
          <a
            href="#book-demo"
            className="text-white bg-[#0F47A6] w-[130px] h-[40px] rounded-md flex items-center justify-center"
          >
            Book Free Demo
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
