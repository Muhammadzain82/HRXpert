import React from "react";
import HRBox from "./HRBox";

export default function HowItWorks() {
  return (
    <div
      className="flex flex-col items-center mt-12 sm:mt-24 md:mt-36 space-y-10r lg:mt-48"
      id="how"
    >
      <div className="text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-[#1E5CD1] text-base sm:text-lg w-[140px] font-urbanist h-[40px] border-b border-[#1E5CD1] mx-auto font-medium mb-2">
          HOW IT WORKS
        </h2>
        <h1 className="text-[#00a3e0] font-urbanist text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
          Empower Employees and Automate HR Processes
        </h1>
        <p className="text-[#5B5B5B] w-full sm:w-[445px] h-auto sm:h-[50px] max-w-2xl font-poppins font-normal mx-auto">
          Streamline internal tasks and enhance productivity, all while ensuring
          fair and transparent HR practices.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-start gap-x-4 sm:gap-x-20 p-4">
        <HRBox />
        <div className="w-full sm:w-[401px] h-auto sm:h-[318px] mt-8 sm:mt-0">
          <div className="w-full sm:w-[398.89px] h-auto sm:h-[62px] mt-2">
            <h1 className="font-urbanist font-bold text-xl sm:text-[27px] text-[#0f47a6]">
              Create a Great Experience Before and After Joining
            </h1>
          </div>
          <div className="w-full sm:w-[401px] h-auto sm:h-[75px] mt-6 sm:mt-10">
            <p className="font-poppins font-normal text-sm sm:text-base text-[#5a6478]">
              Donec tempor risus ut magna egestas, ut placerat ligula aliquet.
              Morbi fermentum felis in urna suscipit, non tincidunt lorem
              malesuada.
            </p>
          </div>
          <div className="w-full sm:w-[398px] h-auto sm:h-[54px] mt-6 sm:mt-10">
            <p className="font-poppins font-normal text-sm sm:text-base text-[#5a6478]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper
              porta.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
