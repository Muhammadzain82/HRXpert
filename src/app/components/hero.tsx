import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/lib/components/ui/card";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <main className=" w-[95%] max-w-[95%] mx-auto mt-8 sm:mt-12 items-center overflow-x-hidden rounded-lg overflow-y-hidden md:mt-16 lg:mt-20 xl:mt-24 bg-gradient-to-b from-blue-50 to-white py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
      <h1 className="w-[70%] h-[30%] font-urbanist text-center text-gradient-to-br from-[#0055cc] to-[#33b2c3] text-3xl sm:text-4xl md:text-5xl mx-auto">
        Revolutionize Your HR Tasks with our
      </h1>
      <h1 className="w-[70%] h-[30%] font-urbanist text-3xl sm:text-4xl text-gradient-to-tr from-[#0055cc] to-[#33b2c3] md:text-5xl mx-auto text-center mt-2">
        Smart Assistant
      </h1>

      {/* <Button className='w-[100px] h-[40px] mx-auto mt-4 justify-center items-center' variant="default">Get Started</Button> */}

      <p className="font-poppins font-normal text-sm sm:text-base text-[#5a6478] text-center mt-4">
        Streamline recruitment, manage talent, and automate <br /> HR processes
        effortlessly.{" "}
      </p>

      <Image
        src="/image (1).png"
        width={1270}
        height={600}
        alt="hero image"
        className="w-[95%] mx-auto mt-12 h-auto"
      />
    </main>
  );
};

export default Hero;
