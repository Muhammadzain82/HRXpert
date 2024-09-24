"use client";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="xl:w-[98%] lg:w-[98%] md:w-[98%] sm:w-[98%] xs:w-[98%] mx-auto">
      <div className="xl:w-[98%] lg:w-[98%] md:w-[98%] sm:w-[98%] xs:w-[98%] mx-auto flex items-center justify-between px-2 mt-4">
        <div className="flex items-center w-[108px] h-[51px] gap-1 pr-6">
          <span className="  text-[#091E4C] text-2xl pt-[8px] gap-1   pb-[10px] pr-[12px] font-semibold ">
            HRXpert
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center space-x-10 pt-1 gap-2 ">
          <a
            href="#powerful"
            className="text-[#091E4C] w-[127px]  h-[27px] font-normal"
          >
            Powerful Features
          </a>
          <a
            href="#how"
            className="text-[#091E4C] w-[127px]  h-[27px] font-normal"
          >
            How It Works
          </a>
          <a
            href="#faq"
            className="text-[#091E4c] w-[100px] h-[27px] font-normal"
          >
            FAQs
          </a>
          <a
            href="#pricing"
            className="text-[#091E4C] font-normal w-[94px] h-[27px]"
          >
            Pricing
          </a>
          {/* <a href="/about" className="text-[#091E4C] font-normal w-[55px] h-[27px]">About</a> */}
        </div>

        {/* Buttons on Right */}
        <div className="hidden lg:flex space-x-4 items-center ">
          {/* <a href="/login" className=" bg-[#E6FCFF] w-[83px] h-[47px] radius-[8px] pt-[10px] pr-[15px] pb[10px] mx-auto pl-[15px] ">Login </a> */}
          <a
            href="#book"
            className="text-white bg-[#0F47A6]  dark:hover:bg-blue-700  w-[150px] h-[47px] radius-[8px] pt-[10px] pr-[15px] pb-[10px] pl-[15px]  rounded-lg gap-[10px]    "
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
          <span className="sr-only">Open main menu</span>
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
        className={`lg:hidden ${
          isOpen ? "block" : "hidden"
        } w-[95%]mx-auto bg-white`}
      >
        <div className="flex flex-col items-start px-4 py-2 space-y-2">
          <a href="#powerful" className="block w-full text-gray-700">
          Powerful Features
          </a>
          <a href="#how" className="block w-full text-gray-700">
          How It Works
          </a>
          <a href="#faq" className="block w-full text-gray-700">
            FAQs
          </a>
          <a href="#pricing" className="block w-full text-gray-700">
          
          </a>
          {/* <a href="/about" className="block w-full text-gray-700">
            About
          </a> */}
          {/* <a href="/button1" className=" bg-[#E6FCFF] w-[50] h-[30px] radius-[2px] pt-[5px] pr-[7.5px] pb[5px] pl-[7.5px] ">Login </a>  */}

          <a
            href="#book"
            className="text-white bg-[#0F47A6] font-[200]   w-[130px] h-[30px] mt-1 radius-[2px] pt-[7px] pr-[7.5px] pb-[7.5px] pl-[7.5px] px-2 rounded-md gap-[5px]    "
          >
            Book Free Demo
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
