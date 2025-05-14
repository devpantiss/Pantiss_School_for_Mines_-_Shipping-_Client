import React from "react";

const ExplorePrograms: React.FC = () => {
  const programs = [
    { title: "Explore Programmes", link: "#" },
    { title: "LPUNEST 2025", link: "#" },
    { title: "Scholarship", link: "#" },
    { title: "Financial Aid", link: "#" },
    { title: "International Placements", link: "#" },
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-black via-purple-900 to-black">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Left Content - Image & Heading */}
        <div className="md:w-1/2 pr-8 flex flex-col items-center md:items-start">
          <h2 className="text-5xl font-bold text-white mb-4">
            Come, be a part of <span className="text-orange-500">History</span>{" "}
            in making
          </h2>

          <img
            src="https://www.lpu.in/lpu-assets/images/home-page/history-in-making/history-in-making.webp"
            alt="Students Group"
            className="w-full h-auto rounded-lg mb-4"
          />
        </div>

        {/* Right Content - Navigation */}
        <div className="md:w-1/2 mt-24">
          <p className="text-gray-50">
            Browse through the links below to find out more about our
            Programmes, Scholarships, Financial Aid and Application Process
          </p>
          <div className="mt-4 border-t border-gray-200">
            {programs.map((program, index) => (
              <a
                key={index}
                href={program.link}
                className="group flex justify-between items-center py-4 border-b border-gray-200 text-gray-50 font-medium hover:bg-orange-500 hover:text-white transition px-6 rounded-lg"
              >
                {program.title}
                <span className="text-xl transform transition-transform duration-300 group-hover:rotate-45">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExplorePrograms;
