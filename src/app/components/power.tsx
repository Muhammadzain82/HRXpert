import Image from "next/image";
import React from "react";

const Empower = () => {
  return (
    <div className="w-full h-full bg-white mt-12 flex flex-col overflow-y-hidden overflow-hidden overflow-x-hidden items-center text-center p-6 md:p-10">
      {/* Powerful Features Section */}
      <p
        className="text-[#0f47a6] font-urbanist text-xs md:text-sm tracking-widest w-full max-w-xs mb-4 relative"
        id="powerful"
      />
        <Image src="/works.png" alt="" width={200} height={200}/>



      {/* Title and Description */}
      <h1 className="mt-2 text-3xl font-semibold text-blue-500 sm:text-4xl lg:text-5xl">Empower Your Workforce with</h1>
      <h1 className="mt-2 text-3xl font-semibold text-blue-900 sm:text-4xl lg:text-5xl mb-6">Advanced Tools</h1>
      <p className="text-gray-500 text-xs md:text-sm max-w-md mx-auto mb-12">
        Boost Efficiency, Productivity, and Employee Growth with Our Innovative
        HR Tools.
      </p>

      {/* Card Grid Section */}
      <div className="w-full max-w-7xl mx-auto">
        {/* Row for Top Three Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xs:grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mb-10">
          {/* Card 1 */}
          <div className="bg-gray-50  border-gray-300 flex flex-col justify-between">
            <Image
              src="/image 1.png"
              alt="Automated Workflows"
              width={400}
              height={500}
              className="rounded-t-md object-cover"
            />
            <div className="flex flex-row items-center mt-5 px-4 md:px-6">
              <Image src="/Vector.png" alt="icon" width={30} height={30} />
              <span className="ml-2 md:ml-3 font-urbanist font-semibold text-[#091E47] text-sm md:text-[18px]">
                Automated Workflows
              </span>
            </div>
            <div className="px-4 py-4 text-left">
              <p className="text-gray-500 text-xs md:text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            {/* <div className="px-4 py-2 md:px-6 md:py-4 text-right">
              <a href="#" className="text-blue-500 font-semibold text-xs md:text-sm">
                → Learn More
              </a>
            </div> */}
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 border-gray-300 flex flex-col justify-between">
            <Image
              src="/image 2.png"
              alt="Employee Self Service"
              width={400}
              height={500}
              className="rounded-t-md object-cover"
            />
            <div className="flex flex-row items-center mt-5 px-4 md:px-6">
              <Image
                src="/fluent-mdl2_manager-self-service.png"
                alt="icon"
                width={30}
                height={30}
              />
              <span className="ml-2 md:ml-3 font-urbanist font-semibold text-[#091E47] text-sm md:text-[18px]">
                Employee Self Service
              </span>
            </div>
            <div className="px-4 py-4 text-left">
              <p className="text-gray-500 text-xs md:text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            {/* <div className="px-4 py-2 md:px-6 md:py-4 text-right">
              <a href="#" className="text-blue-500 font-semibold text-xs md:text-sm">
                → Learn More
              </a>
            </div> */}
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 border-gray-300 flex flex-col justify-between">
            <Image
              src="/image 3.png"
              alt="Real-Time Analytics"
              width={400}
              height={500}
              className="rounded-t-md object-cover"
            />
            <div className="flex flex-row items-center mt-5 px-4 md:px-6">
              <Image src="/Vector (1).png" alt="icon" width={30} height={30} />
              <span className="ml-2 md:ml-3 font-urbanist font-semibold text-[#091E47] text-sm md:text-[18px]">
                Real-Time Analytics
              </span>
            </div>
            <div className="px-4 py-4 text-left">
              <p className="text-gray-500 text-xs md:text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            {/* <div className="px-4 py-2 md:px-6 md:py-4 text-right">
              <a href="#" className="text-blue-500 font-semibold text-xs md:text-sm">
                → Learn More
              </a>
            </div> */}
          </div>
        </div>

        {/* Row for Bottom Two Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {/* Card 4 */}
          <div className="bg-gray-50  border-gray-300 flex flex-col justify-between">
            <Image
              src="/image 4.png"
              alt="Centralized Employee Data"
              width={610}
              height={452}
              className="rounded-t-md object-cover"
            />
            <div className="flex flex-row items-center mt-5 px-4 md:px-6">
              <Image
                src="/octicon_person-24.png"
                alt="icon"
                width={30}
                height={30}
              />
              <span className="ml-2 md:ml-3 font-urbanist font-semibold text-[#091E47] text-sm md:text-[18px]">
                Centralized Employee Data
              </span>
            </div>
            <div className="px-4 py-4 text-left">
              <p className="text-gray-500 text-xs md:text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            {/* <div className="px-4 py-2 md:px-6 md:py-4 text-right">
              <a href="#" className="text-blue-500 font-semibold text-xs md:text-sm">
                → Learn More
              </a>
            </div> */}
          </div>

          {/* Card 5 */}
          <div className="bg-gray-50 border-gray-300 flex flex-col justify-between">
            <Image
              src="/image 6.png"
              alt="Advanced Analytics"
              width={610}
              height={452}
              className="rounded-t-md object-cover"
            />
            <div className="flex flex-row items-center mt-5 px-4 md:px-6">
              <Image
                src="/oui_app-reporting.png"
                alt="icon"
                width={30}
                height={30}
              />
              <span className="ml-2 md:ml-3 font-urbanist font-semibold text-[#091E47] text-sm md:text-[18px]">
                Advanced Analytics and Reporting
              </span>
            </div>
            <div className="px-4 py-4 text-left">
              <p className="text-gray-500 text-xs md:text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            {/* <div className="px-4 py-2 md:px-6 md:py-4 text-right mb-6">
              <a href="#" className="text-blue-500 font-semibold text-xs md:text-sm">
                → Learn More
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Empower;