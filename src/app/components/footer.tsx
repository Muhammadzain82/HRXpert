"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateEmail(email)) {
      console.log("Valid email submitted:", email);
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }
  };

  return (
    <footer className="bg-[#e6f3ff] overflow-x-hidden overflow-y-hidden text-[#0066cc] py-8 px-4 md:py-12 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between mb-8 gap-8">
          <h2 className="text-2xl md:text-4xl font-semibold leading-tight font-urbanist text-center lg:text-left mb-4 lg:mb-0 mt-10">
            Transform Your HR
            <br />
            Processes Today
          </h2>

          <div className="flex flex-col w-full lg:w-auto">
            <p className="text-center lg:text-left w-full lg:w-[448px] font-poppins font-normal text-[#5a6478] text-sm mt-6">
              Donec tempor risus ut magna egestas, ut placerat ligula aliquet.
              Morbi fermentum felis in urna suscipit.
            </p>

            {/* Updated Form Section */}
            <div className="w-full max-w-2xl mx-auto p-4">
              <form onSubmit={handleSubmit} className="flex items-center space-x-2 bg-white rounded p-1">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => {
                  setEmail(e.target.value)
                  setIsValidEmail(true)
                  }}
                  required
                  className="flex-grow border-none bg-transparent focus:ring-0 text-sm placeholder-white"
                />
                <Button 
                 type="submit" 
                 className="bg-[#FF9900] hover:bg-[#ff8800] text-white rounded px-6 py-2 text-sm font-medium transition-colors"
                >
                 Book a Demo
                </Button>
              </form>
              {!isValidEmail && (
              <p className="text-red-500 text-sm mt-1 text-center">
                Please enter a valid email address
              </p>
              )}
            </div>
          </div>
        </div>

        <div className="h-px bg-[#0066cc] opacity-20 my-6 mx-auto"></div>
        <div className="flex flex-col lg:flex-row w-full mt-12 gap-8">
          <div className="flex-1 text-center lg:text-left">
            <h3 className="font-semibold font-urbanist text-2xl mb-4">
              Stay Informed
            </h3>
            <p className="text-sm mb-4 font-poppins font-normal text-[#5a6478]">
              Donec tempor risus ut magna egestas, ut placerat ligula aliquet.
              Morbi fermentum felis in urna suscipit.
            </p>
            <div className="flex justify-center lg:justify-start gap-4">
              <a href="#" className="text-2xl" aria-label="Facebook">
                <Image
                  src="/bxl_facebook.png"
                  alt="Facebook"
                  width={50}
                  height={50}
                />
              </a>
              <a href="#" className="text-2xl" aria-label="Twitter">
                <Image
                  src="/ri_twitter-x-fill.png"
                  alt="Twitter"
                  width={37}
                  height={40}
                  className="mt-2"
                />
              </a>
              <a href="#" className="text-2xl" aria-label="Instagram">
                <Image
                  src="/ant-design_instagram-outlined.png"
                  alt="Instagram"
                  width={40}
                  height={40}
                  className="mt-2"
                />
              </a>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-2 sm:grid-cols-2  md:grid-cols-4 gap-8 text-sm mt-8 lg:mt-0">
            <div>
              <h4 className="font-semibold text-[#003d79] mb-4">Quick Links</h4>
              <ul className="space-y-2 text-[#5a6478]">
                <li>
                  <a href="#powerful">Powerful Features</a>
                </li>
                <li>
                  <a href="#how">How It Work</a>
                </li>
                <li>
                  <a href="#faq">FAQs</a>
                </li>
                <li>
                  <a href="#pricing">Pricing</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[#003d79]">Solutions</h4>
              <ul className="space-y-2 text-[#5a6478]">
                <li>
                  <a href="#">Employee Onboarding</a>
                </li>
                <li>
                  <a href="#">Time and Attendance</a>
                </li>
                <li>
                  <a href="#">Performance Management</a>
                </li>
                <li>
                  <a href="#">Payroll Management</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[#003d79]">Resources</h4>
              <ul className="space-y-2 text-[#5a6478]">
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Case Studies</a>
                </li>
                <li>
                  <a href="#">Webinars</a>
                </li>
                <li>
                  <a href="#">API Documentation</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[#003d79]">Legal</h4>
              <ul className="space-y-2 text-[#5a6478]">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
                <li>
                  <a href="#">Cookie Preferences</a>
                </li>
                <li>
                  <a href="#">GDPR Compliance</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 text-sm text-center lg:text-left font-poppins font-normal text-[#000000]">
          © 2024 360Xpert Solution . All rights reserved.
        </div>
      </div>
    </footer>
  );
}
