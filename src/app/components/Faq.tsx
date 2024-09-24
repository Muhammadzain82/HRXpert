"use client";

import { useState } from "react";

const FAQSection = () => {
  const [hoveredAnswer, setHoveredAnswer] = useState<string | null>(null);

  const faqItems = [
    {
      id: "answer-1",
      question: "How easy is it to set up the software?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris fusce nec tellus sed augue semper porta.",
    },
    {
      id: "answer-2",
      question: "What Kind of support is available?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris fusce nec tellus sed augue semper porta.",
    },
    {
      id: "answer-3",
      question: "Is the software compatible with other tools i use?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris fusce nec tellus sed augue semper porta.",
    },
    {
      id: "answer-4",
      question: "How does the pricing work?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris fusce nec tellus sed augue semper porta.",
    },
    {
      id: "answer-5",
      question: "Can I customize the features to fit my needs?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris fusce nec tellus sed augue semper porta.",
    },
  ];

  return (
    <div className="bg-[#E6F3FF] h-[821px] py-12 mt-48 ">
      <div className="max-w-3xl mx-auto">
        {/* Added FAQs box */}
        <div className="w-[55px] h-[22px] mx-auto mb-8">
          <h2
            className="font-urbanist text-center text-[16px] text-[#0F47A6] border-b border-[#0F47A6]"
            id="faq"
          >
            FAQs
          </h2>
        </div>
        <h1 className="text-2xl font-bold text-center mb-8 text-[#0F47A6]">
          Frequently Asked Questions
        </h1>
        <div className="space-y-4">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              onMouseEnter={() => setHoveredAnswer(item.id)}
              onMouseLeave={() => setHoveredAnswer(null)}
            >
              <button className="w-full text-left p-4 flex justify-between items-center focus:outline-none">
                <span className="font-semibold  font-urbanist  text-[#09134c]">
                  {item.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                    hoveredAnswer === item.id ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`px-4 pb-4 text-gray-600 ${
                  hoveredAnswer === item.id ? "block" : "hidden"
                }`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
