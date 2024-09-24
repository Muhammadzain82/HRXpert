"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Basic Plan",
      price: 29,
      description:
        "Donec tempor risus ut magna egestas, ut placerat ligula aliquet. Morbi fermentum felis.",
      features: [
        "Employee Onboarding",
        "Time and Attendance Tracking",
        "Employee Self-Service Portal",
        "Standard Reporting",
      ],
      buttonText: "Book a Demo",
      color: "bg-white",
      textColor: "text-gray-800",
    },
    {
      name: "Professional Plan",
      price: 79,
      description:
        "Donec tempor risus ut magna egestas, ut placerat ligula aliquet. Morbi fermentum felis.",
      features: [
        "All Basic Plan Features Plus",
        "Performance Management",
        "Customizable Reports and Analytics",
        "Standard Reporting",
      ],
      buttonText: "Get Started With Professional",
      color: "bg-blue-50",
      textColor: "text-gray-800",
    },
    {
      name: "Enterprise Plan",
      price: 199,
      description:
        "Donec tempor risus ut magna egestas, ut placerat ligula aliquet. Morbi fermentum felis.",
      features: [
        "All Professional Plan Features Plus",
        "Advanced Security Controls",
        "Dedicated Account Manager",
        "API Access",
      ],
      buttonText: "Get Started With Enterprise",
      color: "bg-blue-600",
      textColor: "text-white",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-16 px-4 mt-10 font-poppins overflow-x-hidden overflow-y-hidden ">
      <div className="text-center mb-2">
        <span
          className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold"
          id="pricing"
        >
          Pricing Plan
        </span>
      </div>
      <h1 className="text-4xl font-urbanist font-semibold text-center mb-2 text-blue-600">
        Choose the Right Plan for
      </h1>
      <h2 className="text-4xl font-urbanist font-semibold text-center mb-4 text-blue-600">
        Your Business
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Boost Efficiency, Productivity, and Employee Growth with Our Innovative
        HR Tools
      </p>

      <div className="flex justify-center items-center space-x-4 mb-12 font-urbanist font-semibold">
        <span className={`${isAnnual ? "text-gray-500" : "text-blue-600"}`}>
          Monthly
        </span>
        <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
        <span className={`${isAnnual ? "text-blue-600" : "text-gray-500"}`}>
          Annually
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`${plan.color} p-6 rounded-lg shadow-lg flex flex-col h-[580px]`}
          >
            <h2
              className={`text-2xl font-urbanist font-semibold mb-2 ${plan.textColor}`}
            >
              {plan.name}
            </h2>
            <div
              className={`text-4xl font-urbanist font-semibold mb-2 ${plan.textColor}`}
            >
              ${isAnnual ? plan.price * 10 : plan.price}
              <span className="text-lg font-normal">
                /{isAnnual ? "year" : "month"}
              </span>
            </div>
            <p className={`text-sm mb-6 ${plan.textColor}`}>
              {plan.description}
            </p>
            <button
              className={`${
                plan.name === "Enterprise Plan"
                  ? "bg-white text-blue-600"
                  : "bg-blue-600 text-white"
              } py-2 px-4 rounded-md font-semibold mb-6 hover:opacity-90 transition-opacity`}
            >
              {plan.buttonText}
            </button>
            <div
              className={`text-sm font-normal w-[170px] mx-auto ${
                plan.name === "Enterprise Plan"
                  ? "text-white border-white"
                  : "text-[#3b6bbc] border-[#3b6bbc]"
              } text-clip border-2 
            font-poppins rounded-full shadow-lg h-[35px] p-1 text-center`}
            >
              WHAT YOU WILL GET
            </div>
            <ul className="space-y-3 mt-6">
              {plan.features.map((feature, index) => (
                <li
                  key={index}
                  className={`flex items-start text-sm ${plan.textColor}`}
                >
                  <svg
                    className="w-5 h-5 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
