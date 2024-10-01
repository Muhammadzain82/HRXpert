import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <main className="w-[95%] max-w-[95%] mx-auto mt-1 sm:mt-2 items-center overflow-x-hidden rounded-lg overflow-y-hidden md:mt-4 lg:mt-6 xl:mt-8 bg-gradient-to-b from-blue-50 to-white py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
      {/* Heading Section */}
      <h1 className="w-[70%] font-urbanist text-center text-blue-500 text-3xl sm:text-4xl md:text-5xl mx-auto">
        Revolutionize Your HR Tasks with Our
      </h1>
      <h1 className="w-[70%] font-urbanist text-3xl sm:text-4xl text-blue-900 md:text-5xl mx-auto text-center font-bold mt-2">
        Smart Assistant
      </h1>

      {/* Subtext */}
      <p className="font-poppins font-normal text-sm sm:text-base text-[#5a6478] text-center mt-4">
        Streamline recruitment, manage talent, and automate <br /> HR processes effortlessly.
      </p>

      {/* Get Started Button */}
      <div className="flex justify-center mt-6">
        <Button className="text-white bg-[#0F47A6] px-6 py-3 rounded-md">
          Get Started
        </Button>
      </div>

      {/* Image */}
      <Image
        src="/image (1).png"  // Update this with the actual path of the image file
        width={1270}
        height={600}
        alt="hero image"
        className="w-[95%] mx-auto mt-12 h-auto rounded-lg"
      />
    </main>
  );
};

export default Hero;
