import React from "react";

interface Step {
  title: string;
  description: string;
  icon: string; // URL to the icon/image
}

const steps: Step[] = [
  {
    title: "Get Onboard",
    description:
      "Fill out some simple forms, share what certificates you may have.",
    icon: "https://labournet.in/wp-content/uploads/2022/01/Group-191.png",
  },
  {
    title: "Get Assessed",
    description:
      "Go through a simple assessment process that checks your skill and understands your personality.",
    icon: "https://labournet.in/wp-content/uploads/2022/01/Group-198.png",
  },
  {
    title: "Get Ready",
    description:
      "Start learning and getting certified while you access job opportunities. This is your career, not just a job.",
    icon: "https://labournet.in/wp-content/uploads/2022/01/Group-320.png",
  },
  {
    title: "Get to Work",
    description:
      "Start apprenticing, get a job, or pick up gigs. We take care of the paperwork.",
    icon: "https://labournet.in/wp-content/uploads/2022/03/work-150x150.png",
  },
  {
    title: "Get Paid",
    description:
      "Digital job sheets, automated attendance, performance tracking, and digital payment transfers – painless and accurate.",
    icon: "https://labournet.in/wp-content/uploads/2022/01/Group-190.png",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <div className="relative bg-purple-800 py-12 px-4 md:px-16 lg:px-32">
      <h2 className="text-left lg:text-center text-4xl md:text-4xl text-orange-400 font-bold mb-12">
        How It Works
      </h2>
      <div className="hidden lg:block relative">
        {/* Dotted Vertical Line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full border-l-2 border-dotted border-gray-300 z-0"></div>

        {/* Steps */}
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex items-center gap-x-6 mb-16 relative ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            {/* Icon */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10">
              <img
                src={step.icon}
                alt={step.title}
                className="w-full h-16"
              />
            </div>

            {/* Step Content */}
            <div
              className={`max-w-lg p-6 shadow-md bg-white rounded-lg ${
                index % 2 === 0 ? "mr-20 text-left" : "ml-20 text-right"
              }`}
            >
              <h3 className="text-lg font-bold">{step.title}</h3>
              <p className="text-sm text-gray-600 max-w-lg">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="relative block lg:hidden space-y-12">
        {steps.map((step, index) => (
          <div key={index} className="flex gap-x-4 items-center">
            <img
              src={step.icon}
              alt={step.title}
              className="w-16 h-16 z-10 mb-4"
            />
            <div className="bg-white p-6 shadow-md rounded-lg text-center max-w-xs">
              <h3 className="text-lg font-bold">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
        <div className="absolute z-0 top-0 left-8 transform -translate-x-1/2 w-2 h-full border-l-2 border-dotted border-gray-300"></div>
      </div>
    </div>
  );
};

export default HowItWorks;
